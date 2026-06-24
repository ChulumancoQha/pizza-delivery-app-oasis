const Profile = () => {
    return ( 
        <div className="flex-col w-screen h-screen">
            <h1>Profile</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Chulumanco" id="name"/>
                <label htmlFor="surname">Surame</label>
                <input type="text" placeholder="Mdutyana" id="surname"/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="test@gmail.com" id="email"/>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" placeholder="+27 79 834 8373" id="phone"/>
                <button>Update</button>
            </form>
        </div>
     );
}
 
export default Profile;