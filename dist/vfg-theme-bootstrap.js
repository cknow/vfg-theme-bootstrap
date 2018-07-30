(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.vfgThemeBootstrap = factory());
}(this, (function () { 'use strict';

    var custom = {
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

    var group = {};

    var horizontal = {
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

    var row = {
        row: {
            classes: {
                'form-row': true
            }
        },

        schema: {
            wrapper: {
                classes: {
                    col: true
                }
            }
        }
    };

    var schema = {
        classes: {
            'form-control': true
        },

        wrapper: {
            classes: {
                'form-group': true
            }
        }
    };

    var types = {
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

    var theme = {
        custom: custom,
        group: group,
        horizontal: horizontal,
        row: row,
        schema: schema,
        types: types
    };

    var vfgTheme = {
        install: function (Vue) {
            Vue.$vfg.addTheme('bootstrap', theme);
        }
    };

    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(vfgTheme);
    }

    return vfgTheme;

})));
