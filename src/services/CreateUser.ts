interface TechsProps {
    title: string;
    experience: number;
}

interface CreateUserProps {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechsProps>;
}

export default function CreateUser({ name, email, password, techs }: CreateUserProps) {
    const user = {
        name,
        email,
        password,
        techs
    };

    return user;
}