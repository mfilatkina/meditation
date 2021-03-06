import { useEffect } from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";

function Registration({ error, setError, onSubmitForm }) {
  useEffect(() => {
    setError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="registration">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={object({
          name: string()
            .min(2, "Минимум 2 символа!")
            .required("Обязательное поле!"),
          email: string()
            .email("Неправильный адрес почты!")
            .required("Обязательное поле!"),
          password: string()
            .min(6, "Минимум 6 символов!")
            .required("Обязательное поле!"),
        })}
        onSubmit={(data) => {
          onSubmitForm(data);
        }}
      >
        <Form className="form">
          <CustomInput type="text" name="name" placeholder="Имя" />
          <CustomInput type="email" name="email" placeholder="Почта" />
          <CustomInput
            type="text"
            name="password"
            placeholder="Пароль"
            autoComplete="on"
          />
          <div className="wrapper">
            <button type="submit" className="btn btn-dark">
              Зарегистрироваться
            </button>
            <Link to="/login">Вход</Link>
          </div>
          {error ? (
            <div className="error">Произошла ошибка. Попробуйте еще раз</div>
          ) : null}
        </Form>
      </Formik>
    </div>
  );
}

Registration.propTypes = {
  error: PropTypes.bool,
  setError: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

Registration.defaultProps = {
  error: false,
  setError: () => {},
  onSubmitForm: () => {},
};

export default Registration;
