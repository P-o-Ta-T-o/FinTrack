import {useUser} from '@clerk/clerk-react'
import { FinRecordForm } from './fin-record-form';
import { FinRecordList } from './fin-record-list';
import "./financial-record.css";
import { useFinancialRecords } from '../../contexts/financial-record-context';
import { useMemo } from 'react';

export const Dashboard = () => {
    const {user} = useUser();
    const {records} = useFinancialRecords();

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount += record.amount;
        })

        return totalAmount;
    }, [records]);

    return (
        <div className="dashboard-container"> 
            <h1>Welcome {user?.firstName}! These are your financial records:</h1>
            <FinRecordForm/>
            <div>Month's total: {totalMonthly}</div>
            <FinRecordList/>
        </div>
    );
};