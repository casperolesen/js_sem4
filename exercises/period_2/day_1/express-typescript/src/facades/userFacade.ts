import * as bcrypt from 'bcryptjs';

interface IGameUser { name: string, userName: string, password: string, role: string }

const users: Array<IGameUser> = [];

class UserFacade {
    static addUser(user: IGameUser): boolean {

        // hashing password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;

        // check if added
        let before: number = users.length
        let after: number = users.push(user)

        return before + 1 == after

    }

    static deleteUser(userName: string): boolean {
        let before: number = users.length
        users.splice(users.findIndex(user => user.userName === userName), 1)
        let after: number = users.length

        return before - 1 == after
    }

    static getAllUsers(): Array<IGameUser> {
        return users;
    }

    static getUser(userName: string): IGameUser {
        let user: IGameUser = { name: 'not found', userName: 'not found', password: 'not found', role: 'not found' }

        let res = users.find(user => {
            return user.userName === userName
        })

        if (res !== undefined) {
            user = res
        }

        return user

    }
    static async checkUser(userName: string, password: string): Promise<boolean> {
        let user = this.getUser(userName)
        let compare = await bcrypt.compare(password, user.password)

        return compare
        

    }
}

// testing
// console.log("Added User: " + UserFacade.addUser({ name: 'User 1', userName: 'user1@mail.com', password: '123456789', role: 'user' }));
// console.log("Added User: " + UserFacade.addUser({ name: 'User 2', userName: 'user2@mail.com', password: '123456789', role: 'user' }));
// console.log(UserFacade.getAllUsers());
// console.log("Deleted User: " + UserFacade.deleteUser('user2@mail.com'));
// console.log("Found User: " + UserFacade.getUser('user1@mail.com').userName);
// console.log("Found User: " + UserFacade.getUser('user2@mail.com').userName);

// UserFacade.checkUser('user1@mail.com', '123456789').then((res: boolean) => {
//     console.log("Check User: " + res);
// });

export { UserFacade }





