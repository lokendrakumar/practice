enum Roles { ADMIN, Read_ONLY, AUTHOR }

const person: {
    name: string;
    age: number;
    hobbys: string[];
    role: [number, string] //tuple
    roles: Roles
} = {
    'name': 'lok',
    'age': 32,
    'hobbys': ['sports', 'cooking'],
    role: [2, 'admin'],
    roles: Roles.ADMIN
}
if(person.roles == Roles.ADMIN){
    console.log('aya', Roles.ADMIN, person.roles)
}







 