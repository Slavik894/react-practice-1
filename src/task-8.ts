enum Role {
  Admin,
  User,
  Guest
}

function getPermissions(role: Role): string[] {
    if(role === Role.Admin){
        return ["create", "read", "update", "delete"];
    }
    else if(role === Role.User){
        return ["read", "update"];
    }
    else
    return ["read"];
}