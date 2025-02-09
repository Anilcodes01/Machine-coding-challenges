import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

export default function Tabform() {
    const tabs =  [
        {
            name: 'Profile',
            component: Profile
        },
        {
            name: 'Interests',
            component: Interests
        },
        {
            name: 'Settings',
            component: Settings
        }
    ]


    return <div>
    
     <div className="flex gap-4">
       {tabs.map((t) => (
        <div className="border rounded-lg px-4 cursor-pointer">
            {t.name}
        </div>
       ))}
     </div>
    </div>
}