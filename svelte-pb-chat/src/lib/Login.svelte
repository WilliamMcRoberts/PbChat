<script lang="ts">
    import {currentUser, pb} from './pocketbase';
    let username: string;
    let email: string;
    let password: string;
    let dispalyName: string;
    let checked = false;

    async function login() {
        checked = true;
        await pb.collection('users').authWithPassword(email, password);
        checked = false;
    }

   async function signUp() {
        try {
        const data = {
            username,
            email,
            password,
            passwordConfirm: password,
            name: dispalyName
        };
        const createdUser = await pb.collection('users').create(data);

        await login();
        } catch (err) {
            console.log(err);
        }
   }

   function signOut() {
        pb.authStore.clear();
   }

</script>


{#if $currentUser}

<p>Signed in as {$currentUser.username}</p>
<button on:click={signOut}>Sign Out</button>

{:else}
    <form style="margin-bottom: 2em;" on:submit|preventDefault>
        {#if checked === true}
        <p style="color: red;">* Some data is not correct or you need to sign up *</p>
        {/if}
        <input
            placeholder="Username"
            type="text"
            bind:value={username}
        />

        <input
            placeholder="Email"
            type="email"
            bind:value={email}
        />

        <input
            placeholder="Password"
            type="password"
            bind:value={password}
        />

        <input
            placeholder="DisplayName"
            type="text"
            bind:value={dispalyName}
        />

        <button on:click={signUp}>Sign Up</button>
        <button on:click={login}>Login</button>
    </form>
{/if}