const users: string[] = ["alice", "bob", "charlie"];

interface User{
    id: number,
    name: string,
};


const toUserObjects = (array: string[]): User[] =>{
    return array.map((user, index)=>{
        return {id: index+1, name: user};
    });
}

toUserObjects(users);


