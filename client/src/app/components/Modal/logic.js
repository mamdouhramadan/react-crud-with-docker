import { useSelector, useDispatch } from 'react-redux';
import { addUserAction, modalAction, modalReset, updateUserAction } from '../../redux/action';
import { addUser, updateUser } from '../../api/api';
import ShowToast from '../ShowToast';

export const ModalLogic = () => {
    const dispatch = useDispatch();
    const userModal = useSelector(state => state.modal.user);
    const typeModal = useSelector(state => state.modal.type);

    const handleModalClose = () => {
        dispatch(modalAction({ show: false }));
        setTimeout(() => {
            dispatch(modalReset());
        }, 500);
    }

    const handleModalOpen = () => {
        dispatch(modalAction({ show: true }));
    }

    const handleOnChange = (e) => {
        dispatch(modalAction({ user: { ...userModal, [e.target.name]: e.target.value } }));
    }

    const handleAddUser = async () => {
        const res = await addUser(userModal);
        if (res.status === 200) {
            dispatch(addUserAction(res.data));
            ShowToast('success', 'User added successfully');
            handleModalClose();
        } else {
            ShowToast('error', res.message);
        }
    }

    const handleUpdateUser = async () => {
        const res = await updateUser(userModal._id, userModal);
        if (res.status === 200) {
            dispatch(updateUserAction(res.data));
            ShowToast('success', 'User Updated successfully');
            handleModalClose();
        } else {
            ShowToast('error', res.message);
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (userModal.fullname && userModal.age && userModal.gender && userModal.address) {
            if (typeModal === 'add') {
                handleAddUser();
            }
            if (typeModal === 'edit') {
                handleUpdateUser();
            }
        } else {
            ShowToast('error', 'Please fill all the fields');
        }
    }


    return {
        handleModalClose,
        handleModalOpen,
        handleOnChange,
        handleOnSubmit
    }
}
