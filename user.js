// （注）下記の例では Lodash の _.merge を利用しています。
(function($){

    const preset = {
        category: {
            type: 'radio',
            label: '背景色',
            data: '',
            options: [
                { label: '白', data: '#ffffff' },
                { label: '水色', data: '#5fbceb' },
                { label: '青', data: '#0076bf' },
                { label: '濃い青', data: '#004b9a' },
                { label: '紺', data: '#003065' },
            ]
        },
        position: {
            type: 'radio',
            label: 'ポジション',
            data: 'left',
            options: [
                { label: '左', data: 'left' },
                { label: '中央', data: 'center' },
                { label: '右', data: 'right' },
            ]
        },
    };

    mtapp.multiField({
        debug: debug,
        version: 2, // 忘れないように！
        id: 278, // 適宜変更してください。
        label: 'ページ本文',
        showViewRawDataButton: true, // 開発中は true にします。
        fieldBlocks: {
            // 背景画像
            backgroundImage: _.merge({}, mtapp.multiFieldDefaultBLocks.image, { label: '背景画像' }),
            // セクション区切り
            sectionStart: {
                type: 'multi-column',
                label: 'セクション区切り',
                data: {},
                columns: [
                    {
                        col: 12,
                        fields: ['backgroundImage']
                    },
                ]
            },
            // スライダー
            slider: {
                type: 'multipurpose',
                label: 'スライダー',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '',
                        hasBorder: false,
                        fixed: false,
                        addGroupClass: ['row'],
                        addFieldClass: ['col-6'],
                        fields: ['sliderItem']
                    },
                ],
                innerBlocks: {
                    sliderItem: {
                        type: 'chunk',
                        label: 'スライダーアイテム',
                        data: {},
                        fields: ['image', 'heading', 'lead', 'urlText']
                    },
                    lead: _.merge({}, mtapp.multiFieldDefaultBLocks.textarea, { label: 'リード' } ),
                },
                data: {}
            },
            relatedProducts: _.merge({}, mtapp.multiFieldDefaultBLocks.contentCard, {
                label: '関連製品・サービス',
                innerBlocks: {
                    category: _.merge({}, preset.category),
                },
            }),
            // 汎用コンテンツ
            section: {
                type: 'multipurpose',
                label: '汎用コンテンツ',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '',
                        hasBorder: false,
                        fixed: false,
                        fields: ['headingBlock', 'body', 'button']
                    },
                ],
                innerBlocks: {
                    headingBlock: {
                        type: 'chunk',
                        label: '見出し',
                        data: {},
                        fields: ['heading', 'position']
                    },
                    heading: _.merge({}, mtapp.multiFieldDefaultBLocks.textarea, { label: '' } ),
                    position: _.merge({}, preset.position),
                    body: _.merge({}, mtapp.multiFieldDefaultBLocks.tinymce, { label: '本文' }),
                    button: {
                        type: 'chunk',
                        label: 'リンクボタン',
                        data: {},
                        fields: ['label', 'url', 'color']
                    },
                    label: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'ボタンラベル' }),
                    url: _.merge({}, mtapp.multiFieldDefaultBLocks.urlText, { label: 'URL' }),
                    color: _.merge({}, preset.category),
                },
                data: {}
            },
            // FAQ
            faq: {
                type: 'multipurpose',
                label: 'よくある質問と答え',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '',
                        hasBorder: false,
                        fixed: false,
                        fields: ['question', 'answer', 'linkButton']
                    },
                ],
                innerBlocks: {
                    question: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: '質問' } ),
                    answer: _.merge({}, mtapp.multiFieldDefaultBLocks.tinymce, { label: '答え' }),
                    linkButton: {
                        type: 'chunk',
                        label: 'リンクボタン',
                        data: {},
                        fields: [
                            'label',
                            'url',
                            'color',
                        ]
                    },
                    label: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'ボタンラベル' }),
                    url: _.merge({}, mtapp.multiFieldDefaultBLocks.urlText, { label: 'URL' }),
                    color: _.merge({}, preset.category),
                },
                data: {}
            },
            // カラム画像
            columnImages: {
                type: 'multipurpose',
                label: '画像（カラムレイアウト）',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '',
                        hasBorder: false,
                        fixed: true,
                        fields: ['columnCount']
                    },
                    {
                        handle: 'group02',
                        title: '',
                        hasBorder: false,
                        fixed: false,
                        addGroupClass: ['row'],
                        addFieldClass: ['col-6'],
                        fields: ['imageWithTitle']
                    },
                    {
                        handle: 'group03',
                        title: '',
                        hasBorder: false,
                        fixed: true,
                        fields: ['caption']
                    },
                ],
                innerBlocks: {
                    columnCount: _.merge({}, mtapp.multiFieldDefaultBLocks.number, { label: 'カラム数' } ),
                    imageWithTitle: {
                        type: 'chunk',
                        label: '画像',
                        data: {},
                        fields: [
                            'title',
                            'image',
                        ]
                    },
                    caption: _.merge({}, mtapp.multiFieldDefaultBLocks.tinymce, { label: '注書き' } ),
                },
                data: {}
            },
            // 特徴
            features: {
                type: 'multipurpose',
                label: '特徴',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '',
                        hasBorder: false,
                        fixed: false,
                        addGroupClass: ['row'],
                        addFieldClass: ['col-6'],
                        fields: ['cardContent']
                    },
                ],
                innerBlocks: {
                    cardContent: {
                        type: 'chunk',
                        label: 'コンテンツ',
                        data: {},
                        fields: [
                            'image',
                            'heading',
                            'lead',
                            'label',
                            'url',
                        ]
                    },
                    lead: _.merge({}, mtapp.multiFieldDefaultBLocks.tinymce, { label: 'リード' }),
                    label: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'リンクボタンラベル' }),
                    url: _.merge({}, mtapp.multiFieldDefaultBLocks.urlText, { label: 'リンクボタンURL' }),
                },
                data: {}
            },
            // 製品リンク
            productLink: {
                type: 'multipurpose',
                label: '製品リンク',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '',
                        hasBorder: false,
                        fixed: false,
                        fields: ['cardContent']
                    },
                ],
                innerBlocks: {
                    cardContent: {
                        type: 'chunk',
                        label: 'コンテンツ',
                        data: {},
                        fields: [
                            'asset',
                            'heading',
                            'lead',
                            'url',
                            'color',
                        ]
                    },
                    asset: _.merge({}, mtapp.multiFieldDefaultBLocks.asset, { label: 'SVGファイル' }),
                    heading: _.merge({}, mtapp.multiFieldDefaultBLocks.textarea, { label: '見出し' }),
                    lead: _.merge({}, mtapp.multiFieldDefaultBLocks.tinymce, { label: 'リード' }),
                    color: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'カラー' }),
                    url: _.merge({}, mtapp.multiFieldDefaultBLocks.urlText, { label: 'リンクURL' }),
                },
                data: {}
            },
            // ビッグバナー
            bigBanner: {
                type: 'multipurpose',
                label: 'ビッグバナー',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '',
                        hasBorder: false,
                        fixed: true,
                        fields: ['heading', 'banner', 'image', 'lead', 'url']
                    },
                ],
                innerBlocks: {
                    banner: _.merge({}, mtapp.multiFieldDefaultBLocks.asset, { label: 'SVGファイル' }),
                    image: _.merge({}, mtapp.multiFieldDefaultBLocks.image, { label: '背景画像' }),
                    lead: _.merge({}, mtapp.multiFieldDefaultBLocks.tinymce, { label: 'リード' }),
                    url: _.merge({}, mtapp.multiFieldDefaultBLocks.urlText, { label: 'リンクURL' }),
                },
                data: {}
            },
            // 画像＋コンテンツ
            contentWithImage: {
                type: 'multipurpose',
                label: '画像＋コンテンツ',
                description: '',
                innerGroups: [
                    {
                        handle: 'group01',
                        title: '画像',
                        hasBorder: false,
                        fixed: true,
                        fields: ['asset', 'position']
                    },
                    {
                        handle: 'group02',
                        title: 'コンテンツ',
                        hasBorder: false,
                        fixed: false,
                        fields: ['heading', 'paragraph', 'compare']
                    },
                ],
                innerBlocks: {
                    asset: _.merge({}, mtapp.multiFieldDefaultBLocks.asset, { label: 'SVGファイル' }),
                    position: _.merge({}, preset.position),
                    heading: _.merge({}, mtapp.multiFieldDefaultBLocks.textarea, { label: '見出し' }),
                    paragraph: _.merge({}, mtapp.multiFieldDefaultBLocks.tinymce, { label: '段落' }),
                    compare: {
                        type: 'table-vertical',
                        label: '他社との比較',
                        data: {},
                        fields: ['sixapart', 'companyA', 'companyB', 'companyC', 'other']
                    },
                    sixapart: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'シックス・アパート' }),
                    companyA: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'A社' }),
                    companyB: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'B社' }),
                    companyC: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'C社' }),
                    other: _.merge({}, mtapp.multiFieldDefaultBLocks.text, { label: 'その他' }),
                },
                data: {}
            },
        },
        fieldGroups: [
            ['sectionStart', 'section', 'slider', 'features', 'relatedProducts', 'productLink', 'bigBanner', 'contentWithImage', 'columnImages', 'faq']
        ]
    })

})(jQuery);
