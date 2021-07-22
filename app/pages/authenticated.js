import React from 'react';
import nookies from 'nookies';
import {verifyToken} from '../firebaseAdmin';
import firebaseClient from '../firebaseClient';

function Authenticated({session}) {
    firebaseClient();
    if (session) {
        return (
            <>
            <h1>This user is authenticated</h1>
            <p>{session}</p>
            <p> You can now navigate the site</p>
            </>
        )
    } else {
        <>
        <p>Loading...</p>
        </>
    }
}

export async function getServerSideProps(context) {
    try {
        const cookies = nookies.get(context)
        const token = await verifyToken(cookies.token)
        const {uid, email} = token;
        return {
            props: {session: `Your email is ${email} and your UID is ${uid}.`}
        }
    } catch (error) {
        context.res.writeHead(302, {location: '/'});
        context.res.end();
        return{ props: [] }
    }
}

export default Authenticated;