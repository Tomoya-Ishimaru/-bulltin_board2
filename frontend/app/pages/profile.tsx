/* eslint-disable react-hooks/rules-of-hooks */
import { Image, Flex, Badge, Text, FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react";  
import { Formik,Form,Field } from 'formik'; 
import { setUser } from "../hooks/stores/modules/useLoginUserProvider"
import { useDispatch } from "react-redux";
import { useMessage } from "../hooks/useMessage";

export default function profile(){
    const dispatch = useDispatch();
    const { showMessage } = useMessage();

    function validate(value: any) {
        let error
        if (!value) {
            error = "エラーが発生しました。"
        }
        return error
    }
    function setUserInfo(values: { name: string; hobby: string; words: string; }){
        dispatch(setUser(values));
        localStorage.setItem('userName', values.name)
        localStorage.setItem('hobby', values.hobby)
        localStorage.setItem('words', values.words)
    }

    return (
        <>
            <Formik
                initialValues={{ name: '', hobby: '', words: '' }}
                onSubmit={(values, actions) => {
                    setUserInfo(values);
                    showMessage({ title: "プロフィールを設定しました。", status: "success" });
                    actions.setSubmitting(false)
                }}
            >
                {(props) => (
                    <Form >
                        <Flex direction="column" width="80%" mx="auto" mt="100px">
                            <Field name='name' width="80%" validate={validate}>
                                {({ field, form }: { field: any, form: any }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel>お名前</FormLabel>
                                        <Input {...field} mx="auto" />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='hobby' width="80%" validate={validate}>
                                {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel>趣味</FormLabel>
                                        <Input {...field} mx="auto" />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='words' width="80%" validate={validate}>
                                {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel>一言</FormLabel>
                                        <Input {...field} mx="auto" />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={props.isSubmitting}
                                type='submit'
                                width="20%"
                                mx="auto"
                            >
                                設定する
                            </Button>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </>
    )
}