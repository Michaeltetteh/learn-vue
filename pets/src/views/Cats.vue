<template>
    <div>
        <h1>Cats List</h1>
        <b-table striped hover :items="cats">
            <template v-slot:cell(name)="data">
                <router-link :to="`/pets/${data.index}`">
                    {{ data.value }}
                </router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
import cats from '@/data/cats'

export default {
    data(){
        return {
            cats
        }
    }
}
</script>