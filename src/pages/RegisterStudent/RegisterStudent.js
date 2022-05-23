import React from 'react';
import styles from './RegisterStudent.module.css';
import InputField from "../../components/InputField/InputField";
import skeleton from "../../assets/skeleton.jpg";
import Button from "../../components/Button/Button";
import {useForm} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Label from "../../components/Label/Label";
import Background from "../../components/Background/Background";
import InputTextarea from "../../components/InputTextarea/InputTextarea";
import InstrumentSelector from "../../components/InstrumentSelector/InstrumentSelector";
import Form from "../../components/Form/Form";
import Avatar from "../../components/Avatar/Avatar";

const RegisterStudent = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onChange" });

    const onFormSubmit = (data) => {
        console.log(data)
    }

    return (
        <main className={styles.register_student_page}>
            <Form onSubmit={handleSubmit(onFormSubmit)}>

                <Background>
                    <section>
                        <h2>Gegevens</h2>

                        <InputField
                            type="text"
                            inputName="name"
                            placeholder="Naam"
                            register={register}
                            validationRules={{
                                required: "Een naam invullen is verplicht",
                                minLength: { value: 2, message: "Je naam moet uit minimaal 2 letters bestaan" }
                            }}
                        />
                        <ErrorMessage errors={errors}
                                      name="name"
                                      render={({ message }) => <p className={styles.error}>{message}</p>}
                        />

                        <InputField
                            type="email"
                            inputName="email"
                            placeholder="Email"
                            register={register}
                            validationRules={{
                                required: "Email adres mag niet leeg zijn",
                                minLength: { value: 6, message: "Emailadres is te kort. Gebruik een \"@\"" }
                            }}
                        />
                        <ErrorMessage errors={errors}
                                      name="email"
                                      render={({ message }) => <p className={styles.error}>{message}</p>}
                        />

                        <InputField
                            type="number"
                            inputName="age"
                            placeholder="Leeftijd"
                            register={register}
                            validationRules={{
                                required: "Je leeftijd invullen is verplicht",
                                min: { value: 16, message: "Je moet minimaal 16 jaar oud zijn om je in te schrijven" }
                            }}
                        />
                        <ErrorMessage errors={errors}
                                      name="age"
                                      render={({ message }) => <p className={styles.error}>{message}</p>}
                        />

                        <InputField
                            type="number"
                            inputName="phoneNumber"
                            register={register}
                            validationRules={{
                                required: "Je telefoonnummer is verplicht",
                                minLength: { value: 10, message: "Vul een geldig telefoonnummer in" },
                                maxLength: { value: 13, message: "Vul een geldig telefoonnummer in" }
                            }}
                            placeholder="Telefoonnummer bv: 06-12345678"
                        />
                        <ErrorMessage errors={errors}
                                      name="phoneNumber"
                                      render={({ message }) => <p className={styles.error}>{message}</p>}
                        />

                        <InputField
                            type="text"
                            inputName="residence"
                            register={register}
                            validationRules={{
                                required: "Een woonplaats invullen is verplicht."
                            }}
                            placeholder="Woonplaats"
                        />
                        <ErrorMessage errors={errors}
                                      name="residence"
                                      render={({ message }) => <p className={styles.error}>{message}</p>}
                        />
                    </section>


                    <aside className={styles.avatar}>
                        <span className={styles.upload_text}>
                            <Label text="Foto uploaden" />
                            <Button
                                color="blue"
                                text="Kies een bestand"
                            />
                        </span>

                        <Avatar photo={skeleton} alt="Afbeelding" />

                    </aside>

                </Background>

                <Background specificBackground={styles.request_background}>
                    <section>
                        <h2>Je verzoek</h2>

                        <span className={styles.instrument}>
                                <Label
                                    id="instrument"
                                    text="Instrument"
                                />
                                <InstrumentSelector
                                    inputName="instrument"
                                    register={register}
                                    validationRules={{
                                        required: true
                                    }}
                                />
                        </span>

                        <span className={styles.request}>
                                <Label
                                    id="request"
                                    text="Wat wil je leren?"
                                />
                                <InputTextarea
                                    placeholder="Wees zo duidelijk mogelijk!"
                                    inputName="request"
                                    register={register}
                                    validationRules={{
                                        required: "Een beschrijving van wat je wil leren is verplicht",
                                        minLength: { value: 20, message: "Vul wat meer tekst in. Zo is het duidelijker voor de docent wat je wil leren" },
                                        maxLength: { value: 4000, message: "Ik denk dat je wel duidelijk genoeg ben geweest. Probeer het in iets minder woorden" }
                                    }}
                                />
                                <ErrorMessage errors={errors}
                                              name="request"
                                              render={({ message }) => <p className={styles.error}>{message}</p>}
                                />

                            </span>
                    </section>


                    <section className={styles.preference}>
                        <h3>Hoe wil je les krijgen?</h3>
                            <label>
                                <input
                                    type="checkbox"
                                    {...register("preferenceForLessonType")}
                                    value="Live lessen"
                                />
                                Live les
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    {...register("preferenceForLessonType")}
                                    value="Online lessen"
                                />
                                Online les
                            </label>
                    </section>

                </Background>

                <Background specificBackground={styles.user_background}>
                    <section>
                            <Label
                                id="username"
                                text="Gebruikersnaam"
                            />
                            <InputField
                                type="text"
                                inputName="username"
                                placeholder="Gebruikersnaam"
                                register={register}
                                validationRules={{
                                    required: "Een gebruikersnaam is verplicht",
                                    min: { value: 8, message: "Je gebruikersnaam moet minimaal 8 karakters bevatten" }
                                }}

                            />
                            <ErrorMessage errors={errors}
                                          name="username"
                                          render={({ message }) => <p className={styles.error}>{message}</p>}
                            />

                            <Label
                                id="password"
                                text="Wachtwoord"
                            />
                            <small>Minimaal 8 karakters, waaronder één hoofdletter, één kleine letter, een cijfer en een symbool. </small>
                            <InputField
                                type="password"
                                inputName="password"
                                register={register}
                                validationRules={{
                                    required: "Een wachtwoord is verplicht",
                                    min: { value: 8, message: "Je wachtwoord moet minimaal 8 karakters bevatten" }
                                }}
                                placeholder="Wachtwoord"
                            />
                            <ErrorMessage errors={errors}
                                          name="password"
                                          render={({ message }) => <p className={styles.error}>{message}</p>}
                            />
                    </section>

                    <Button
                        color="orange"
                        type="submit"
                        text="Registreren"
                    />
                </Background>

            </Form>
        </main>
    );
};

export default RegisterStudent;