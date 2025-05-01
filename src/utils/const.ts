export const SIMBOLOS = {
    MINUS: '-',
    PLUS: '+',
    DOLLAR: '$',
    SPACE: ' ',
}

export const SHOPPING_PAGE = {
    TITLE: 'Shopping Page',
    TOTAL: 'Total',
    TOTAL_QUANTITY: 'Total Quantity',
}

export const PRODUCT_CARD = {
    IMAGE_URL: './coffee-mug.png',
    IMAGE_ALT: 'Product image',
    NO_IMAGE_CONTENT: 'No image content',
    IMAGE_WIDTH: '100%',
    MIN_VALUE_COUNT: 1,
    VALUE_DISCOUNT: -1,
    VALUE_INCREASE: 1,
    VALUE_INCREASE_TWO: 2,
    VALUE_DISCOUNT_TWO: -2,
    DEFAULT_COUNT: 0,
    NO_TITLE: 'No title',
    DEFAULT_COUNT_PRODUCT: 1,
    MAX_COUNT_PRODUCT: 10,
    RESET: 'Reset',
}

export const PRODUCT_LIST = {
    NO_PRODUCTS: 'No products found',
    LOADING: 'loading products',
}

export const FAKE_API = {
    PRODUCTS_LIST: [
        {
            "id": "1",
            "title": "Product 1",
            "price": 10.99,
            "img": "./coffee-mug.png"
        },
        {
            "id": "2",
            "title": "Product 2",
            "price": 11.99,
            "img": "./coffee-mug2.png"
        },
    ]
}

export const CART_STYLE = {
    shoppingCart: {
        backgroundColor: 'var(--color-light-black)',
        height: '100%',
        position: 'fixed' as const,
        right: '0',
        top: '0',
        width: '150px',
        zIndex: '100',
        display: 'flex' as const,
        flexDirection: 'column' as const,
        justifyContent: 'space-between' as const,
    },
    productCardCart: {
        width: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    totalContainer: {
        backgroundColor: 'transparent',
        margin: 'auto auto 0 auto',
    }
}

export const PRODUCT_COUNT = {
    MIN_VALUE: 0,
}

