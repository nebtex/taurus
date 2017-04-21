# Taurus

Omniql client for javascript based on mobx

## Similar or software that inspired taurus

* Facebook relay - https://facebook.github.io/relay/
* Appollo client - https://github.com/apollographql/apollo-client

## Features

* Caching 
* Offline queries and observable queries
* Optimistic mutations
* Autoquery (tourus will callculate the most optimal way to query the backend in order to populate the models in the current rendered components) 
* Observable omniql objects
* Observable omniql online queries. 

## Architecture

Taurus will store all the omniql objects as observables, in a ResourceMap, see `@nebtex/hashmaps`, and will allow to the programer to automatically listen for changes, in the ResourceMap storage, also run both offline and online queries, commands,etc. 


## Offline api

The offline api allow to the programer to create offline queries (that will never hit the backend), and run againts the object stored in the ResourceMap, when a object is add or delete to offline queries will run again using interested graph subscription, and only the queries that could be affected by this event will rerun again. 

## Licensing

*@nebtex/taurus* is licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full license text.