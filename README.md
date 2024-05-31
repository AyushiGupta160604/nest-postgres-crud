## Performing CRUD operations on Postgresql DB using Nest.js applications

### Step 1: Creating a new database with two tables(namely users and wallet_address)
- users attributes: username, email, password_hashed (password storing in hashed form for security purpose)
- wallet_address attributes: id, user_id(referencing to users table), address and coin_type

### Step 2: Creating a nest.js application
- #### Steps to do that
  - install CLI globally by: npm install -g @nestjs/cli
  - To interact with postgres: npm install pg 
  - create a nest application by: nest new application_name

- #### Generating services to link to postgresql
  - use the following to generate both the services: users and wallet-addresses
    - #### nest generate service service_name
  - generate controllers for both the services using the following
    - #### nest generate controller service_name

### Final step: To write code for basic CRUD operations
- #### Create a new ts file for both user and wallet-address namely service_name.entity.ts to define the structure of the service entity and its interaction with the database.
- #### Make modification in controller, service and module files of both services to perform the operations.

### Testing (Used Postman)
#### POST: User
![Post User](https://github.com/AyushiGupta160604/nest-postgres-crud/blob/main/Testing/post%20user.png)
#### POST: Wallet-Address
![Post wallet-address](https://github.com/AyushiGupta160604/nest-postgres-crud/blob/main/Testing/post%20walletaddress.png)
#### Find API
![Find user from wallet-address](https://github.com/AyushiGupta160604/nest-postgres-crud/blob/main/Testing/find%20walletaddress.png)

## And boom we are done with task! Additionally performing tests validate the working of the same!!
