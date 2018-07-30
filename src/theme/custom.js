export default {
    types: {
        checkbox: {
            classes: {
                'custom-control-input': true,
                'form-check-input': false
            },
            wrapper: {
                wrapper: {
                    field: {
                        classes: {
                            'custom-control': true,
                            'custom-checkbox': true,
                            'form-check': false
                        },
                        append: {
                            label: {
                                classes: {
                                    'custom-control-label': true,
                                    'form-check-label': false
                                }
                            }
                        }
                    }
                }
            }
        },

        radio: {
            classes: {
                'custom-control-input': true,
                'form-check-input': false
            },
            wrapper: {
                wrapper: {
                    field: {
                        classes: {
                            'custom-control': true,
                            'custom-radio': true,
                            'form-check': false
                        },
                        append: {
                            label: {
                                classes: {
                                    'custom-control-label': true,
                                    'form-check-label': false
                                }
                            }
                        }
                    }
                }
            }
        },

        range: {
            classes: {
                'form-control-range': false,
                'custom-range': true
            }
        },

        file: {
            classes: {
                'form-control-file': false,
                'custom-file-input': true
            },
            wrapper: {
                prepend: {
                    label: {
                        enabled: false
                    }
                },
                wrapper: {
                    custom: {
                        enabled: true,
                        classes: {
                            'custom-file': true
                        },
                        append: {
                            label: {
                                enabled: true,
                                tag: 'label',
                                classes: {
                                    'custom-file-label': true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
