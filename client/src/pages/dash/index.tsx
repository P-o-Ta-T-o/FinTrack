import {useUser} from '@clerk/clerk-react'
import { FinRecordForm } from './fin-record-form';
import { FinRecordList } from './fin-record-list';

export const Dashboard = () => {
    const {user} = useUser();
    return (
        <div className="dashboard-container"> 
            <h1>Welcome {user?.firstName}! These are your financial records:</h1>
            <FinRecordForm/>
            <FinRecordList/>
        </div>
    );
};