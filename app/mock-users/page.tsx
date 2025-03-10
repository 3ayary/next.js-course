import { revalidatePath } from "next/cache"

type Mockuser = {
    name: string;
    id: number;

}

export default async function MockUsers() {
    const res = await fetch("https://67ce7b01125cd5af757aa5f4.mockapi.io/users")
    const users = await res.json()


async function addUser(formData:FormData){
    "use server"
const name = formData.get("name")
const res = await fetch("https://67ce7b01125cd5af757aa5f4.mockapi.io/users",
    {
        method : "POST",
        headers : {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({name}),
    }
  
)
const newUser = await res.json()
revalidatePath("/mock-users")
console.log(newUser)
}



    return (

        <div className="py-10 ml-2">

            <form className="mb-4 " action={addUser}>
                <input type="text" name="name" required className="border p-2  mr-2 bg-white rounded text-black" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">add user</button>
            </form>


            <div className="grid grid-cols-4 gap-4 py-10">

                {users.map((user: Mockuser) => (

                    <div key={user.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        {user.name}
                    </div>
                ))

                }
            </div>
        </div>
    )
}