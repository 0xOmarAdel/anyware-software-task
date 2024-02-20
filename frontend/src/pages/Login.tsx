import { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { login } from "../store/slices/authSlice";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [t] = useTranslation();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login({ name, password }));
  };

  return (
    <div className="min-h-screen flex flex-row justify-center items-center">
      <Card className="!py-12">
        <h2 className="text-2xl text-gray-600 font-medium capitalize">
          {t("login")}
        </h2>
        <form className="mt-8 flex flex-col gap-6" onSubmit={submitHandler}>
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={setName}
            />
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              value={password}
              onChange={setPassword}
            />
          </div>
          <Button text={t("login")} type="submit" />
        </form>
      </Card>
    </div>
  );
};

export default Login;
