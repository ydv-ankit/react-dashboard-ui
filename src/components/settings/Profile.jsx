import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className="flex flex-col sm:flex-row items-center mb-6">
				<img
					src="https://i.pravatar.cc/150"
					alt="Profile"
					className="rounded-full w-20 h-20 object-cover mr-4"
				/>

				<div>
					<h3 className="text-lg font-semibold text-gray-100">
						Ankit Ydv
					</h3>
					<p className="text-gray-400">ankityadav11241@gmail.com</p>
				</div>
			</div>
		</SettingSection>
	);
};
export default Profile;
