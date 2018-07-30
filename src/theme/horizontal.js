export default {
    schema: {
        wrapper: {
            classes: {
                row: true
            },
            prepend: {
                label: {
                    classes: {
                        'col-form-label': true,
                        'col-sm-2': true
                    }
                }
            },
            wrapper: {
                field: {
                    enabled: true,
                    classes: {
                        'col-sm-10': true
                    }
                }
            }
        }
    },

    types: {
        checkbox: {
            wrapper: {
                prepend: {
                    colText: {
                        enabled: true,
                        classes: {
                            'col-sm-2': true
                        }
                    }
                },
                append: {
                    label: {
                        enabled: false
                    }
                },
                wrapper: {
                    field: {
                        classes: {
                            'form-check': false
                        },
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
                }
            }
        },

        radio: {
            wrapper: {
                prepend: {
                    colText: {
                        enabled: true,
                        classes: {
                            'col-sm-2': true
                        }
                    }
                },
                append: {
                    label: {
                        enabled: false
                    }
                },
                wrapper: {
                    field: {
                        classes: {
                            'form-check': false
                        },
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
                }
            }
        }
    },

    custom: {
        types: {
            checkbox: {
                classes: {
                    'custom-control-input': true,
                    'form-check-input': false
                },
                wrapper: {
                    wrapper: {
                        field: {
                            wrapper: {
                                field: {
                                    classes: {
                                        'form-check': false,
                                        'custom-control': true,
                                        'custom-checkbox': true
                                    },
                                    append: {
                                        label: {
                                            classes: {
                                                'form-check-label': false,
                                                'custom-control-label': true
                                            }
                                        }
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
                            wrapper: {
                                field: {
                                    classes: {
                                        'form-check': false,
                                        'custom-control': true,
                                        'custom-radio': true
                                    },
                                    append: {
                                        label: {
                                            classes: {
                                                'form-check-label': false,
                                                'custom-control-label': true
                                            }
                                        }
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
                },
                wrapper: {
                    prepend: {
                        label: {
                            classes: {
                                'col-form-label': false
                            }
                        }
                    }
                }
            },

            file: {
                classes: {
                    'form-control-file': false,
                    'custom-file-input': true
                },
                wrapper: {
                    wrapper: {
                        field: {
                            enabled: true,
                            classes: {
                                'col-sm-10': true
                            },
                            wrapper: {
                                field: {
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
            }
        }
    }
};
