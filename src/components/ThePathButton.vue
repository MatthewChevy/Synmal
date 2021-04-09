<template>
    <div class="contact-link-button">
        <a
            class="contact-link"
            tabindex="1"
            @click="$router.push({ path: `/${path}` })"
        >
            {{ textButton }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        textButton: {
            type: String
        },
        path: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .contact-link-button {
        max-width: 12rem;
        margin: 0 auto;
        padding: 3px 30px;
        border-radius: 3px;
        color: $darkest;
        background-color: $fancy;
        cursor: pointer;

        a {
            font: {
                size: 16px;
                weight: 300;
            }
        }
    }

    .contact-link-button:hover,
    :focus {
        transition: 0.35s;
        background-color: darken($fancy, 10%);
    }
}
</style>
