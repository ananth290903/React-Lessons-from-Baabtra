import React from 'react'

export default function Conddisplay({option}) {

    if(option.Admin) return <h1>Hello Admin</h1>;
    if(option.Guest) return <h1>Hello Guest</h1>;
    return <h1>Hello User</h1>;
}
