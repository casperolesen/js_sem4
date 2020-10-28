import UserFacade from '../src/facades/user';
import { expect } from "chai";
import { ApiError } from '../src/errors/apiError';
import { bryptAsync, bryptCheckAsync } from '../src/utils/bcrypt-async-helper'
import IGameUser from '../src/interfaces/GameUser'
import { assert } from 'console';

describe("Verify the UserFacade", () => {

  //Exercise --> Fix this to handle password hashing, asynchronously
  beforeEach(async () => {
    //const hash: string = "secret";
    const hash: string = await bryptAsync("secret")
    UserFacade.users = [
      { name: "Peter Pan", userName: "pp@b.dk", password: hash, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: hash, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: hash, role: "admin" }
    ]
  })

})


it("Should Add the user Kurt", async () => {
  const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
  try {
    const status = await UserFacade.addUser(newUser);
    const jan = await UserFacade.getUser("jo@b.dk");
    const passwordOK = await bryptCheckAsync("secret", jan.password);
    expect(status).to.be.equal("User was added")
    expect(UserFacade.users.length).to.equal(4)
    expect(passwordOK).to.be.equal(true);
  } catch (err) {
    throw new Error("Password did not match")
  } finally { }
})

it("Should remove the user Peter", async () => {
  try {
    const status = await UserFacade.deleteUser("pp@b.dk");
    const peter = await UserFacade.getUser("pp@b.dk");
    expect(status).to.be.equal("User was deleted");
    expect(peter).to.be.equal("User Not Found");
    expect(UserFacade.users.length).to.equal(3);
  } catch (err) {
  } finally { }
})

it("Should get three users", async () => {
  expect(UserFacade.users.length).to.equal(3)
})

it("Should find Donald Duck", async () => {
  const donald = await UserFacade.getUser("dd@b.dk");
  const passwordOK = await bryptCheckAsync("secret", donald.password)
  //expect(donald).to.be.equal({ name: "Donald Duck", userName: "dd@b.dk", password: passwordHash, role: "user" })
  expect(donald.name).to.be.equal("Donald Duck")
  expect(donald.userName).to.be.equal("dd@b.dk")
  expect(donald.role).to.be.equal("user")
  expect(passwordOK).to.be.equal(true);
})

it("Should not find xxx.@.b.dk", async () => {
  try {
    const found = await UserFacade.getUser("xxx.@.b.dk");
  expect(found).to.be.equal("User Not Found");
  } catch (error) {
    
  }
  
})

