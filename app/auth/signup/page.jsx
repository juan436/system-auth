'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

import { FormSignup } from '@/components/form';
import useSubmit from '@/hooks/user/useSubmit';

function SignupPage() {
    const { onSubmit } = useSubmit();
    const reactHookForm = useForm();

    return (
        <FormSignup reactHookForm={reactHookForm} onSubmit={onSubmit} />
    );
}

export default SignupPage;