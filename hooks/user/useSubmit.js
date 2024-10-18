import asApi from '@/apiAxios/asApi';
import { useSnackMessages } from '@/hooks/useSnackMessage'; // Importa el hook

const useSubmit = () => {
    const { msgMostrar } = useSnackMessages();

    const onSubmit = async (form) => {
        // Validar que las contraseñas coincidan
        if (form.password !== form.confirmarPassword) {
            console.error('Las contraseñas no coinciden');
            msgMostrar('Las contraseñas no coinciden', 'error');
            return;
        }

        const { confirmarPassword, ...userData } = form;

        try {
            const { data } = await asApi({
                url: '/auth/signup',
                method: 'POST',
                data: userData
            });

            if (!data.message) throw new Error('Error durante el proceso, vuelva a intentarlo');

            console.log(data.message);
            msgMostrar(data.message, 'success');
        } catch (error) {
            console.error('Error en la solicitud:', error.response?.data || error.message);
            msgMostrar('Error en la solicitud: ' + (error.response?.data || error.message), 'error');
        }
    };

    return { onSubmit };
};

export default useSubmit;