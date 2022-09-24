import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../api/api';
import ShowToast from '../components/ShowToast';
import { allUserAction } from '../redux/action';

export const PageLogic = () => {

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const usersList = useSelector(state => state.users);


    useEffect(() => {
        setLoading(true);
        getAllUsers.then(res => {
            dispatch(allUserAction(res.data));
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            ShowToast('error', 'Error', err.message);
        });
    }, [dispatch]);


    return { usersList, loading }

}
