## Databases in Production
### Running Highly Available, High Performance Databases 
<br>
<br>

#### TOC

S/N | --  
--- | -------------  
1.  | Intro   
2.  | App Structure & Common practise 
3.  | Explaining Availability & Performance   
4.  | Replication 
5.  | Local setup & Demo 

<br>
<br><br>
<br><br>

##### We know what databases are....
A database is a collection of information that is organized so that it can easily be accessed, managed, and updated.

<br>
<br>

##### Common app structure
![Credit: university.mongodb.com](/public/img/app.png)

<br>
<br><br>
<br><br>
<br>
## Standard Practises like:
#### 1. Development, Staging, Production
![](/public/img/usual.png)
<br>
###Yeah, we know this.

<br>
<br>
<br>
There's more...
> ### Database servers can work together to allow a second server to take over quickly if the primary server fails (high availability), or to allow several computers to serve the same data (load balancing).

<br>
<br>

#### 2. High availability (Redundancy)
  * Replication

<br>
<br>

#### 3. Performance
  * Query time & Indexing
  * Sharding
  * Load-balancing

<br>
<br>
<br>
<br>

## Replication
Database replication is the frequent electronic copying data from a database in one computer or server to a database in another resulting in a distributed database system.
![](/public/img/replication.png)

<br>
<br>

#### Purpose of Replication
Replication provides redundancy and increases data availability. With multiple copies of data on different database servers, replication protects a database from the loss of a single server. 
<br>
<br>

You can either:
#### 1. Point different instance of your app to different DBs clone (Sub-optimal)

<br>
<br>

#### OR

<br>
<br>

#### 2. .
![](/public/img/replA.png)

<br>
<br>

#### OR

<br>
<br>

#### 3. .
![](/public/img/replB.png)


Based on #3 above ....

<br>
<br>

### MongoDB case study
(And, sure, other DBs have their of way of implementing this.)
<br>
What we're going to create a DB similar to: 
![](/public/img/setup.png)
  
<br>
<br>
<br>
<br>

#### * App to test
-->Clone this:  https://github.com/andela-smartins/demo-wkshop 

#### * DB setup

```sh
$ sudo mkdir -p /mongo/data2
$ sudo mkdir -p /mongo/data3
$ sudo mkdir -p /mongo/data4
$ sudo mongod --dbpath /mongo/data2/ --replSet demodb --port 27017
$ sudo mongod --dbpath /mongo/data3/ --replSet demodb --port 27018
$ sudo mongod --dbpath /mongo/data4 --replSet demodb --port 27019
$ mongo shell --port 27017
 ---- config = {_id: 'demoapp_db', members: [{_id: 0, host: 'localhost:27017'}, {}, {}]}`
 ---- rs.initiate(config)
 ---- rs.slaveOk()
```



