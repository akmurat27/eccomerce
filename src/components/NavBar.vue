<template>
    <div>
        <v-toolbar class="my-4" flat style="width: 80%; margin: auto;">
            <h3>{{ lang }}</h3>
            <v-menu 
                open-on-hover
                close-on-content-click
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        color="#22262A"
                        v-bind="attrs"
                        v-on="on"
                        style="cursor: pointer;"
                    >
                        mdi-menu-down
                    </v-icon>
                </template> 
                <v-list height="200" width="130" flat>
                    <v-list-item-group v-model="model_1">
                        <h3 style="padding: 10px;">Translations</h3>
                        <v-list-item @click="setLang('TM')" :ripple="false" color="primary">
                            Turkmen
                        </v-list-item>
                        <v-list-item color="primary" @click="setLang('RU')" :ripple="false">
                            Russian
                        </v-list-item>
                        <v-list-item color="primary" @click="setLang('EN')" :ripple="false">
                            English
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu> 
            <h3>{{ language }}</h3>
            <v-menu 
                open-on-hover
                close-on-content-click
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        color="#22262A"
                        v-bind="attrs"
                        v-on="on"
                        style="cursor: pointer;"
                    >
                        mdi-menu-down
                    </v-icon>
                </template>     
                <v-list height="200" width="130" flat>
                    <v-list-item-group v-model="model_2">
                        <h3 style="padding: 10px;">Translations</h3>
                        <v-list-item @click="setLanguage('TM')" :ripple="false" color="primary">
                            Turkmen
                        </v-list-item>
                        <v-list-item color="primary" @click="setLanguage('RU')" :ripple="false">
                            Russian
                        </v-list-item>
                        <v-list-item color="primary" @click="setLanguage('EN')" :ripple="false">
                            English
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn elevation="0" color="transparent" :ripple="false" height="60">
                <v-icon>mdi-account</v-icon>
                <div class="ma-3" style="text-transform: none; font-size: 20px;">My Profile</div>
            </v-btn>
            <router-link to="/CartItem">
                <v-btn elevation="0" color="transparent"  height="60" :ripple="false">
                    <v-badge content="2" color="red" class="mr-3">
                        <v-icon>mdi-cart-outline</v-icon>
                    </v-badge>
                    <div class="ma-3" style="text-transform: none; font-size: 20px;">
                        Items
                    </div>
                </v-btn>
            </router-link>
            <div class="mx-1" style="font-size: 20px;">$0.00</div>
            <v-btn :ripple="false" elevation="0" color="transparent" height="60">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-toolbar flat class="my-2" style="width: 80%; margin: auto;">
            <router-link to="/homeView" style="text-decoration: none; color: black;">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <v-img src="@/assets/Icon.png" style="height: 44px; width: 44px; cursor: pointer;"></v-img>
                    <h3 class="ml-2" style="text-transform: none; font-weight: 800; font-size: 18px; cursor: pointer;">E-Comm</h3>
                </div>
            </router-link>
            <v-spacer></v-spacer>
            <v-list flat>
                <v-list-item-group class="d-flex" color="primary" v-model="ItemHome" mandatory>
                    <v-menu 
                        open-on-hover
                        close-on-content-click
                        offset-y
                        nudge-left="300"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-list-item
                                v-bind="attrs"
                                v-on="on"
                                :ripple="false"
                                style="font-family: Poppins, sans-serif; font-size: 24px;"
                                to="/productlist"
                                class="mx-8"
                            >
                                HOME
                            </v-list-item>
                        </template>
                        <div style="width: 1029px; background-color: white; padding: 30px; display: flex; justify-content: space-between; align-items: center;">
                            <v-card v-for="(dropdown, i) in dropdownItem" :key="i" style="width: 155px; height: 265px;" flat>
                                <v-card-title style="font-size: 22px; color: #C1C8CE; font-weight: 500;">{{ dropdown.Category }}</v-card-title>
                                <v-card-text style="color: #262626; font-size: 16px;" class="py-2"> {{ dropdown.Item1 }} </v-card-text>
                                <v-card-text style="color: #262626; font-size: 16px;" class="py-2"> {{ dropdown.Item2 }} </v-card-text>
                                <v-card-text style="color: #262626; font-size: 16px;" class="py-2"> {{ dropdown.Item3 }} </v-card-text>
                                <v-card-text style="color: #262626; font-size: 16px;" class="py-2"> {{ dropdown.Item4 }} </v-card-text>
                                <v-card-text style="color: #262626; font-size: 16px;" class="py-2"> {{ dropdown.Item5 }} </v-card-text>
                            </v-card>                                  
                        </div>
                    </v-menu>
                    <v-list-item class="mx-8" :ripple="false" style="font-family: Poppins, sans-serif; font-size: 24px;">
                        BAGS   
                    </v-list-item>
                    <v-list-item class="mx-8" :ripple="false" style="font-family: Poppins, sans-serif; font-size: 24px;">
                        SNEAKERS
                    </v-list-item>
                    <v-list-item class="mx-8" :ripple="false" style="font-family: Poppins, sans-serif; font-size: 24px;">
                        BELT
                    </v-list-item>
                    <v-list-item
                        :ripple="false"
                        style="font-family: Poppins, sans-serif; font-size: 24px;"
                        to="/Contact"
                    >
                        CONTACT
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-toolbar>
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
  export default {
    data: () => ({
        model_1: 0,
        model_2: 1,
        ItemHome: 0,
        lang: 'TM',
        language: 'RU',
        dropdownItem: [
            {
                Category: 'Category',
                Item1: 'Corporate Shoes', 
                Item2: 'Sneakers',
                Item3: 'Sandals',
                Item4: 'Sport Shoe',
                Item5: 'Trainers'
            },
            {
                Item1: 'Corporate Shoes', 
                Item2: 'Sneakers',
                Item3: 'Sandals',
                Item4: 'Sport Shoe',
                Item5: 'Trainers'
            },
            {
                Category: 'Category',
                Item1: 'HOT DEAL', 
                Item2: 'Sunglasses',
                Item3: 'Belts',
                Item4: 'Handbags',
                Item5: 'Sneakers'
            },
            {
                Item1: 'HOT DEAL', 
                Item2: 'Sunglasses',
                Item3: 'Belts',
                Item4: 'Handbags',
                Item5: 'Sneakers'
            },
            {
                Category: 'Category',
                Item1: 'Corporate Shoes', 
                Item2: 'Sneakers',
                Item3: 'Sandals',
                Item4: 'Sport Shoe',
                Item5: 'Trainers'
            }
        ],
    }),
    methods: {
        setLang(lang) {
            this.lang = lang
        },
        setLanguage(language){
            this.language = language
        },
    },
    comments: {
        CartItem
    }
  }
</script>

<style scoped>

.btn::before {
    background-color: transparent !important;
}
</style>