import { deleteUser } from "../../api/api";
import { deleteUserAction, modalAction } from "../../redux/action";
import ShowToast from "../ShowToast";
import { useDispatch } from 'react-redux';


export const UsersTableLogic = () => {

    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        deleteUser(id).then((res) => {
            dispatch(deleteUserAction(id));
            ShowToast('success', 'User Deleted Successfully');
            console.log('res: ', res);
        }).catch((err) => {
            console.log(err);
            ShowToast('error', 'Error');
        });
    }

    const handleViewUser = (user) => {
        dispatch(modalAction({
            user,
            title: 'View User',
            type: 'view',
            show: true
        }));
    }

    const handleEditUser = (user) => {
        dispatch(modalAction({
            user,
            title: 'Edit User',
            type: 'edit',
            show: true
        }));

    }

    return { handleDeleteUser, handleViewUser, handleEditUser }
}