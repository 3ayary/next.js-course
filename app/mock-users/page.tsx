type Mockuser = {
    name: string;
    id: number;
    
}

export default async function MockUsers() {
    const res = await fetch("https://67ce7b01125cd5af757aa5f4.mockapi.io/users")
    const users = await res.json()

    return (
        <div className="grid grid-cols-4 gap-4 py-10">

            {users.map((user: Mockuser) => (

                <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {user.name}
                </div>
           ))

            }
        </div>
    )
}