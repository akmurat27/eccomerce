<template>
    <div>
        <NavBar />
        <v-card tile flat>
            <v-list style="background-color: #F6F7F8; padding: 0;" flat>
                <v-list-item-group
                    v-model="model"
                    color="primary"
                    style= "width: 14.5%; display: flex; align-items: center; margin: auto;">
                    <v-list-item style="padding-left: 100px;" :ripple="false">   
                        Home
                    </v-list-item>
                    /
                    <v-list-item :ripple="false">   
                        Hot Deals
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
        <v-container >
            <v-card style="width: 80%; margin: auto; margin-top: 6rem; margin-bottom: 6rem;" elevation="1">
                <v-row no-gutters >
                    <v-col cols="12" sm="6" style="background-color: #40BFFF;">
                        <div style="display: flex; justify-content: center; align-items: center; height: 715px">
                            <v-img src="@/assets/call1.png" style="position: absolute; left: -7rem"></v-img>
                            <div style="display: flex; justify-content: center; flex-direction: column; position: relative; left: 5rem; bottom: 6rem; color: white; width: 190px; margin: auto;">
                                <div style="font-size: 40px; font-weight: 400; margin-bottom: 5rem; ">get in <br> touch</div>
                                <div class="my-5" style="font-size: 14px">contact@e-comm.ng</div>
                                <div class="my-5" style="font-size: 14px">+234 4556 6665 34</div>
                                <div class="my-5" style="font-size: 14px">20 Prince Hakerem Lekki Phase 1, Lagos.</div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" align-self="center">
                        <div style="margin-left: 6rem;">Fullname</div>
                            <v-text-field 
                                :rules="[rules.required, rules.counter]"
                                counter
                                maxlength="25" 
                                outlined 
                                placeholder="Type your name" 
                                height="74px" 
                                style="width: 510px; margin: auto;"
                                required
                            >
                        </v-text-field>
                        <div style="margin-left: 6rem;"> Email </div>
                            <v-text-field 
                                v-model="email"
                                suffix="@gmail.com" 
                                :rules="[rules.required, rules.email]"
                                counter
                                maxlength="25" 
                                outlined 
                                placeholder="Type your email" 
                                height="74px" 
                                style="width: 510px; margin: auto;"
                                required
                            >
                        </v-text-field>
                        <div style="margin-left: 6rem;"> Message </div>
                            <v-textarea outlined placeholder="Type your message"  style="width: 510px; margin: auto;"></v-textarea>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>

        <div style="display: flex; width: 600px; margin: auto; margin-top: 5rem; margin-bottom: 5rem;">
            <v-text-field placeholder="Search query..." solo flat style="border: 1px solid #40BFFF; height: 50px;"></v-text-field><v-btn elevation="0" :ripple="false" flat height="50" style="text-transform: none; letter-spacing: 0.8px; background-color: #40BFFF; color: white; font-size: 16px">Search</v-btn>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import FooterPage from '@/components/FooterPage.vue';
import NavBar from '@/components/NavBar.vue';
export default{
    data: () => ({
        model: 0,
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 12 || 'Max 12 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        }
    }),
    components: {
        NavBar,
        FooterPage,
    }
}
</script>

<style scoped></style>