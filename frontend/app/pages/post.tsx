/* eslint-disable react-hooks/rules-of-hooks */
import { Image, Flex, Badge, Text, FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react";
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useSelector } from "react-redux"
import { useMessage } from "../hooks/useMessage";

export default function post() {
    const userName = useSelector<any>(state => state.user.name);
    const { showMessage } = useMessage();

    const post = async (values: { comment: string; }) => {
        const ENDPOINT = `/api/query`;
        const result = await axios.post(ENDPOINT, {
                user_name: userName,
                content: values.comment
        })

        if (result.status == 200) {
            showMessage({ title: "投稿しました。", status: "success" });
        }
        else {
            showMessage({ title: "エラーが発生しました。", status: "error" });
        }
    }

    function validate(value:any) {
        let error
        if (!value) {
            error = "エラーが発生しました。"
        } 
        return error
    }
    return (
        <Formik
            initialValues={{ comment: '' }}
            onSubmit={(values, actions) => {
                post(values);
                actions.setSubmitting(false)
            }}
        >
            {(props) => (
                <Form >
                    <Flex direction="column" width="80%" mx="auto" mt="100px">
                    <Field name='comment' width="80%" validate={validate}>
                        {({ field, form }:any) => (
                            <FormControl isInvalid={form.errors.comment && form.touched.comment}>
                                <FormLabel>投稿フォーム</FormLabel>
                                <Input {...field}  mx="auto"/>
                                <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
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
                        投稿する
                    </Button>
                    </Flex>
                    
                </Form>
            )}
        </Formik> 
    )
}