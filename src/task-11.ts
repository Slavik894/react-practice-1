interface User{
    username: string,
    age: number,
    city?: string
};

type Role = "admin" | "user" | "guest";

const createUserCard = (obj: User, role: Role): string =>{
    return `${obj.username} (${obj.age}) - ${role} from ${obj.city ? obj.city : "Unknown"}`;
}
createUserCard({username: "Slavik", age: 20}, "admin");