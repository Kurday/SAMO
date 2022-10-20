// Кастомный алерт, используется при залогинивании и разлогинивании
// работает на модуле "sweetalert2"

export const alertSuccess = {
    icon: 'success',
    title: 'Успешно!',
    showConfirmButton: false,
    timer: 2000,
};

export const alertError = {
    icon: 'error',
    title: 'Ошибка!',
    text: 'Проверьте правильность введённых данных',
    timer: 2000,
};
