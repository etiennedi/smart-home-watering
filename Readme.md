This page describes the roadmap for the desired architecture

# Smart-home-garden v1

All config will be in config files in the desired service at first. If necessary we can create a config ui later, but not at first. 

## Decision logic v1 (docker service)

- Desired interval between watering = 3 days
- In v1 it consumes open weather map at time of request to get historic rain data
    - In a later version, it consumes openweathermap api to get historic rain data once per day and stores results
    - This is important, because openweathermap does not allow request historic data for longer than specific time, but we want to be able to get decision data for any day in history that the system was running (could be used for optimising water consumption later)
- How much rain per day counts as watering? = 40mm 
- Did we water or did it rain since <desired interval>? 
    - If no -> desire watering, if yes -> don’t
    - In v1 there is no option to water for a shorter timeframe because it rained a bit
    - There is only “did it rain enough, then don’t water” and vice versa
- Ignore weather forecast in v1

```
GET /watering-decision/2017-07-15  // can also be used to request information on the past (did we plan to water on xxxx-xx-xx?)
200 OK
{
	“water” : true,	
	“reason: “”
}

200 OK 
{
	“water”: false,
	“reason”: “watered 2 days ago” | “rained 1 day ago” (only for logging)
}
```

## Watering manager (service)

- Desired time for watering = 6 am
- Desired rain program
    - Is an array, because it will specify the order in which we rain
    -  [{ “zone”: “back”, “duration”: 30 }, {“zone” : “side”, “duration”: 30 }]
- Desired pause between zones = 1
- Every day at <desired time> it will ask the decision logic, whether it should water today.
    - If yes, it will create a watering plan (in memory)
- It exposes a REST interface, that can be polled continuously:
- Important: The consumer of the interface will not know of any reasoning behind 

```
GET /watering-manager (to be polled for example every 10s)
200 OK 
{
	“front” : { water: true }
	“back” : { water: false }
}
```

### Watering controller (raspberry pi)
- Polls GET /watering-controller every 10 seconds
- Map decision to GPIO ports (each port has a relay that controls a 24V DC valve)
- (Later) Create log entry when starting and stopping (not important at beginning, in the beginning we can simply trust that whenever watering was desired, there was watering)

