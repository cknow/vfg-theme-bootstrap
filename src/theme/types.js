export default {
    checkbox: {
        classes: {
            'form-control': false,
            'form-check-input': true
        },
        wrapper: {
            append: {
                label: {
                    enabled: false
                }
            },
            wrapper: {
                field: {
                    enabled: true,
                    classes: {
                        'form-check': true
                    },
                    append: {
                        label: {
                            enabled: true,
                            tag: 'label',
                            classes: {
                                'form-check-label': true
                            }
                        }
                    }
                }
            }
        }
    },

    radio: {
        classes: {
            'form-control': false,
            'form-check-input': true
        },
        wrapper: {
            append: {
                label: {
                    enabled: false
                }
            },
            wrapper: {
                field: {
                    enabled: true,
                    classes: {
                        'form-check': true
                    },
                    append: {
                        label: {
                            enabled: true,
                            tag: 'label',
                            classes: {
                                'form-check-label': true
                            }
                        }
                    }
                }
            }
        }
    },

    range: {
        classes: {
            'form-control': false,
            'form-control-range': true
        }
    },

    file: {
        classes: {
            'form-control': false,
            'form-control-file': true
        }
    },

    button: {
        classes: {
            'form-control': false,
            'btn': true
        }
    },

    image: {
        classes: {
            'form-control': false
        }
    },

    submit: {
        classes: {
            'form-control': false,
            'btn': true
        }
    }
};
