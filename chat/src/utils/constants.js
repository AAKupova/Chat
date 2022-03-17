export const DataFormAuth = {
  title: "Регистрация",
  textLink: "Уже есть аккаунт",
  buttonText: "Зарегистрироваться",
  link: "",
  fields: [
    {
      min: '2',
      max: '30',
      name: 'email',
      type: 'email',
      text: 'Почта',
      error: 'Некорректный адрес почты',
    },
    {
      min: "3",
      max: "20",
      name: "login",
      text: "Логин",
      error: "Некорректный Логин",
    },
    {
      text: "Имя",
      name: "name",
      error: "Имя с заглавной буквы",
    },
    {
      text: "Фамилия",
      name: "surname",
      error: "Имя с заглавной буквы",
    },
    {
      max: '15',
      min: '10',
      name: 'phone',
      type: 'phone',
      text: 'Телефон',
      error: 'Некорректный номер телефона',
    },
    {
      min: "8",
      max: "40",
      text: "Пароль",
      name: "password",
      type: "password",
      error: "Пароль не меньше 8 символов",
    },
    {
      min: "8",
      max: "40",
      name: "SecondPassword",
      type: "password",
      text: "Повторите пароль",
      error: "Пароль не совподает",
    },
  ],
};

export const DataFormLogin = {
  title: "Вход",
  textLink: "Нет аккаунта?",
  buttonText: "Войти",
  link: "",
  fields: [
    {
      min: '2',
      max: '30',
      name: 'email',
      type: 'email',
      text: 'Почта',
      error: 'Некорректный адрес почты',
    },
    {
      min: "3",
      max: "20",
      name: "login",
      text: "Логин",
      error: "Некорректный Логин",
    },
  ],
};
