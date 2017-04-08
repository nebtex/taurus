# taurus
omniql client for javascript based on mobx

## similar or software that inspired taurus

* facebook relay - https://facebook.github.io/relay/
* appollo client - https://github.com/apollographql/apollo-client

## features

* caching 
* offline queries and observable queries
* optimistic mutations
* autoquery (tourus will callculate the most optimal way to query the backend in order to populate the models in the current rendered components) 
* observable omniql objects
* observable omniql online queries. 

## archiecture

taurus, will store all the omniql objects as observables, in a ResourceMap, see `@nebtex/hashmaps`, and will allow to the programer to automatically listen for changes, in the ResourceMap storage, also run both offline and online queries, commands,etc. 





