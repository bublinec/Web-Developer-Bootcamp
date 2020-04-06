# Authentication

- possible to code from scratch (relatively easy)
- faster to use tools such as Passport

## Types: 
- local (email/username, pssw)
- using service (google/fb...)

## How it works? 
HTTP - state list protocol -> requests doesn't contain any info about state 
(any info about previous requests/I cannot tell if the user has logge in before)

- I want server to know I am still logged in
- we solve this using SESSIONS
- those enable state info in http requests - wheteher someone is login or not
=> after I log in, every http req will contain state with piece of info such as: bublinec is logged in. When I log out, that state is gone - session expired.



## Side notes
- if the route that form redirects to is not defined, browser just hungs and then timeout

- **middle ware** function that runs before callback    