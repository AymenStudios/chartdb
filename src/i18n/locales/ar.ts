import type { LanguageMetadata } from '../types';

export const ar = {
    translation: {
        menu: {
            file: {
                file: 'ملف',
                new: 'جديد',
                open: 'فتح',
                save: 'حفظ',
                import: 'استيراد',
                export_sql: 'تصدير SQL',
                export_as: 'تصدير كـ',
                delete_diagram: 'حذف الرسم التخطيطي',
                exit: 'خروج',
            },
            edit: {
                edit: 'تعديل',
                undo: 'تراجع',
                redo: 'إعادة',
                clear: 'مسح',
            },
            view: {
                view: 'عرض',
                show_sidebar: 'إظهار الشريط الجانبي',
                hide_sidebar: 'إخفاء الشريط الجانبي',
                hide_cardinality: 'إخفاء العلاقات',
                show_cardinality: 'إظهار العلاقات',
                zoom_on_scroll: 'تكبير/تصغير بالتمرير',
                theme: 'السمة',
                show_dependencies: 'إظهار التبعيات',
                hide_dependencies: 'إخفاء التبعيات',
                show_minimap: 'إظهار الخريطة المصغرة',
                hide_minimap: 'إخفاء الخريطة المصغرة',
            },
            backup: {
                backup: 'نسخ احتياطي',
                export_diagram: 'تصدير الرسم',
                restore_diagram: 'استعادة الرسم',
            },
            help: {
                help: 'مساعدة',
                docs_website: 'التوثيق',
                join_discord: 'انضم إلينا على Discord',
            },
        },

        delete_diagram_alert: {
            title: 'حذف الرسم التخطيطي',
            description: 'لا يمكن التراجع عن هذا الإجراء. سيتم حذف الرسم التخطيطي نهائيًا.',
            cancel: 'إلغاء',
            delete: 'حذف',
        },

        clear_diagram_alert: {
            title: 'مسح الرسم التخطيطي',
            description: 'لا يمكن التراجع عن هذا الإجراء. سيتم حذف جميع البيانات في الرسم نهائيًا.',
            cancel: 'إلغاء',
            clear: 'مسح',
        },

        reorder_diagram_alert: {
            title: 'إعادة ترتيب الرسم',
            description: 'سيؤدي هذا الإجراء إلى إعادة ترتيب جميع الجداول في الرسم. هل تريد المتابعة؟',
            reorder: 'إعادة ترتيب',
            cancel: 'إلغاء',
        },

        multiple_schemas_alert: {
            title: 'مخططات متعددة',
            description: '{{schemasCount}} مخططات في هذا الرسم. المعروض حاليًا: {{formattedSchemas}}.',
            dont_show_again: "عدم الإظهار مرة أخرى",
            change_schema: 'تغيير',
            none: 'لا شيء',
        },

        copy_to_clipboard_toast: {
            unsupported: {
                title: 'فشل النسخ',
                description: 'الحافظة غير مدعومة.',
            },
            failed: {
                title: 'فشل النسخ',
                description: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
            },
        },

        theme: {
            system: 'النظام',
            light: 'فاتح',
            dark: 'داكن',
        },

        zoom: {
            on: 'تشغيل',
            off: 'إيقاف',
        },

        last_saved: 'آخر حفظ',
        saved: 'تم الحفظ',
        loading_diagram: 'جاري تحميل الرسم...',
        deselect_all: 'إلغاء تحديد الكل',
        select_all: 'تحديد الكل',
        clear: 'مسح',
        show_more: 'عرض المزيد',
        show_less: 'عرض أقل',
        copy_to_clipboard: 'نسخ إلى الحافظة',
        copied: 'تم النسخ!',

        side_panel: {
            schema: 'المخطط:',
            filter_by_schema: 'تصفية حسب المخطط',
            search_schema: 'بحث في المخطط...',
            no_schemas_found: 'لم يتم العثور على مخططات.',
            view_all_options: 'عرض جميع الخيارات...',
            tables_section: {
                tables: 'الجداول',
                add_table: 'إضافة جدول',
                filter: 'تصفية',
                collapse: 'طي الكل',
                clear: 'مسح التصفية',
                no_results: 'لم يتم العثور على جداول تطابق التصفية.',
                show_list: 'عرض قائمة الجداول',
                show_dbml: 'عرض محرر DBML',

                table: {
                    fields: 'الحقول',
                    nullable: 'قابل للفراغ؟',
                    primary_key: 'المفتاح الأساسي',
                    indexes: 'الفهارس',
                    comments: 'التعليقات',
                    no_comments: 'لا توجد تعليقات',
                    add_field: 'إضافة حقل',
                    add_index: 'إضافة فهرس',
                    index_select_fields: 'اختيار الحقول',
                    no_types_found: 'لم يتم العثور على أنواع',
                    field_name: 'الاسم',
                    field_type: 'النوع',
                    field_actions: {
                        title: 'خصائص الحقل',
                        unique: 'فريد',
                        character_length: 'الطول الأقصى',
                        comments: 'التعليقات',
                        no_comments: 'لا توجد تعليقات',
                        delete_field: 'حذف الحقل',
                    },
                    index_actions: {
                        title: 'خصائص الفهرس',
                        name: 'الاسم',
                        unique: 'فريد',
                        delete_index: 'حذف الفهرس',
                    },
                    table_actions: {
                        title: 'إجراءات الجدول',
                        change_schema: 'تغيير المخطط',
                        add_field: 'إضافة حقل',
                        add_index: 'إضافة فهرس',
                        duplicate_table: 'تكرار الجدول',
                        delete_table: 'حذف الجدول',
                    },
                },
                empty_state: {
                    title: 'لا توجد جداول',
                    description: 'قم بإنشاء جدول للبدء',
                },
            },
            relationships_section: {
                relationships: 'العلاقات',
                filter: 'تصفية',
                add_relationship: 'إضافة علاقة',
                collapse: 'طي الكل',
                relationship: {
                    primary: 'الجدول الأساسي',
                    foreign: 'الجدول المرجعي',
                    cardinality: 'نوع العلاقة',
                    delete_relationship: 'حذف',
                    relationship_actions: {
                        title: 'الإجراءات',
                        delete_relationship: 'حذف',
                    },
                },
                empty_state: {
                    title: 'لا توجد علاقات',
                    description: 'قم بإنشاء علاقة لربط الجداول',
                },
            },
            dependencies_section: {
                dependencies: 'التبعيات',
                filter: 'تصفية',
                collapse: 'طي الكل',
                dependency: {
                    table: 'الجدول',
                    dependent_table: 'عرض التبعية',
                    delete_dependency: 'حذف',
                    dependency_actions: {
                        title: 'الإجراءات',
                        delete_dependency: 'حذف',
                    },
                },
                empty_state: {
                    title: 'لا توجد تبعيات',
                    description: 'قم بإنشاء عرض للبدء',
                },
            },

            areas_section: {
                areas: 'المناطق',
                add_area: 'إضافة منطقة',
                filter: 'تصفية',
                clear: 'مسح التصفية',
                no_results: 'لم يتم العثور على مناطق تطابق التصفية.',

                area: {
                    area_actions: {
                        title: 'إجراءات المنطقة',
                        edit_name: 'تعديل الاسم',
                        delete_area: 'حذف المنطقة',
                    },
                },
                empty_state: {
                    title: 'لا توجد مناطق',
                    description: 'قم بإنشاء منطقة للبدء',
                },
            },

            custom_types_section: {
                custom_types: 'أنواع مخصصة',
                filter: 'تصفية',
                clear: 'مسح التصفية',
                no_results: 'لم يتم العثور على أنواع مخصصة تطابق التصفية.',
                empty_state: {
                    title: 'لا توجد أنواع مخصصة',
                    description: 'ستظهر الأنواع المخصصة هنا عند توفرها في قاعدة البيانات',
                },
                custom_type: {
                    kind: 'النوع',
                    enum_values: 'قيم التعداد',
                    composite_fields: 'الحقول',
                    no_fields: 'لا توجد حقول محددة',
                    field_name_placeholder: 'اسم الحقل',
                    field_type_placeholder: 'اختر نوعًا',
                    add_field: 'إضافة حقل',
                    custom_type_actions: {
                        title: 'الإجراءات',
                        delete_custom_type: 'حذف',
                    },
                    delete_custom_type: 'حذف النوع',
                },
            },
        },

        toolbar: {
            zoom_in: 'تكبير',
            zoom_out: 'تصغير',
            save: 'حفظ',
            show_all: 'عرض الكل',
            undo: 'تراجع',
            redo: 'إعادة',
            reorder_diagram: 'إعادة ترتيب الرسم',
            highlight_overlapping_tables: 'تمييز الجداول المتداخلة',
        },

        new_diagram_dialog: {
            database_selection: {
                title: 'ما هي قاعدة البيانات الخاصة بك؟',
                description: 'كل قاعدة بيانات لها ميزات وقدرات فريدة.',
                check_examples_long: 'عرض الأمثلة',
                check_examples_short: 'أمثلة',
            },

            import_database: {
                title: 'استيراد قاعدة البيانات',
                database_edition: 'إصدار قاعدة البيانات:',
                step_1: 'قم بتشغيل هذا البرنامج النصي في قاعدة البيانات:',
                step_2: 'الصق نتيجة البرنامج النصي في هذه النافذة →',
                script_results_placeholder: 'نتيجة البرنامج النصي هنا...',
                ssms_instructions: {
                    button_text: 'تعليمات SSMS',
                    title: 'التعليمات',
                    step_1: 'اذهب إلى أدوات > خيارات > نتائج الاستعلام > SQL Server.',
                    step_2: 'إذا كنت تستخدم "النتائج إلى الشبكة"، غيّر الحد الأقصى للأحرف المسترجعة للبيانات غير XML (اضبط على 9999999).',
                },
                instructions_link: 'تحتاج مساعدة؟ شاهد كيف',
                check_script_result: 'تحقق من نتيجة البرنامج النصي',
            },

            cancel: 'إلغاء',
            import_from_file: 'استيراد من ملف',
            back: 'رجوع',
            empty_diagram: 'رسم تخطيطي فارغ',
            continue: 'متابعة',
            import: 'استيراد',
        },

        open_diagram_dialog: {
            title: 'فتح رسم تخطيطي',
            description: 'اختر رسمًا تخطيطيًا لفتحه من القائمة أدناه.',
            table_columns: {
                name: 'الاسم',
                created_at: 'تاريخ الإنشاء',
                last_modified: 'آخر تعديل',
                tables_count: 'الجداول',
            },
            cancel: 'إلغاء',
            open: 'فتح',
        },

        export_sql_dialog: {
            title: 'تصدير SQL',
            description: 'قم بتصدير مخطط الرسم الخاص بك إلى برنامج {{databaseType}}',
            close: 'إغلاق',
            loading: {
                text: 'الذكاء الاصطناعي يقوم بإنشاء SQL لـ {{databaseType}}...',
                description: 'يجب أن يستغرق هذا حتى 30 ثانية.',
            },
            error: {
                message: 'حدث خطأ أثناء إنشاء برنامج SQL. يرجى المحاولة لاحقًا أو <0>الاتصال بنا</0>.',
                description: 'يمكنك استخدام OPENAI_TOKEN الخاص بك، راجع الدليل <0>هنا</0>.',
            },
        },

        create_relationship_dialog: {
            title: 'إنشاء علاقة',
            primary_table: 'الجدول الأساسي',
            primary_field: 'الحقل الأساسي',
            referenced_table: 'الجدول المرجعي',
            referenced_field: 'الحقل المرجعي',
            primary_table_placeholder: 'اختر جدول',
            primary_field_placeholder: 'اختر حقل',
            referenced_table_placeholder: 'اختر جدول',
            referenced_field_placeholder: 'اختر حقل',
            no_tables_found: 'لم يتم العثور على جداول',
            no_fields_found: 'لم يتم العثور على حقول',
            create: 'إنشاء',
            cancel: 'إلغاء',
        },

        import_database_dialog: {
            title: 'استيراد إلى الرسم الحالي',
            override_alert: {
                title: 'استيراد قاعدة البيانات',
                content: {
                    alert: 'استيراد هذا الرسم سيؤثر على الجداول والعلاقات الموجودة.',
                    new_tables: 'سيتم إضافة <bold>{{newTablesNumber}}</bold> جداول جديدة.',
                    new_relationships: 'سيتم إنشاء <bold>{{newRelationshipsNumber}}</bold> علاقات جديدة.',
                    tables_override: 'سيتم استبدال <bold>{{tablesOverrideNumber}}</bold> جداول.',
                    proceed: 'هل تريد المتابعة؟',
                },
                import: 'استيراد',
                cancel: 'إلغاء',
            },
        },

        export_image_dialog: {
            title: 'تصدير صورة',
            description: 'اختر معامل القياس للتصدير:',
            scale_1x: '1x عادي',
            scale_2x: '2x (مُوصى به)',
            scale_3x: '3x',
            scale_4x: '4x',
            cancel: 'إلغاء',
            export: 'تصدير',
            advanced_options: 'خيارات متقدمة',
            pattern: 'تضمين نمط الخلفية',
            pattern_description: 'إضافة نمط شبكة خفيف للخلفية.',
            transparent: 'خلفية شفافة',
            transparent_description: 'إزالة لون الخلفية من الصورة.',
        },

        new_table_schema_dialog: {
            title: 'اختر المخطط',
            description: 'يتم عرض مخططات متعددة حاليًا. اختر واحدًا للجدول الجديد.',
            cancel: 'إلغاء',
            confirm: 'تأكيد',
        },

        update_table_schema_dialog: {
            title: 'تغيير المخطط',
            description: 'تحديث مخطط الجدول "{{tableName}}"',
            cancel: 'إلغاء',
            confirm: 'تغيير',
        },

        star_us_dialog: {
            title: 'ساعدنا على التحسن!',
            description: 'هل ترغب في إضافة نجم لنا على GitHub؟ الأمر بسيط جدًا!',
            close: 'ليس الآن',
            confirm: 'بالتأكيد!',
        },
        export_diagram_dialog: {
            title: 'تصدير الرسم',
            description: 'اختر تنسيق التصدير:',
            format_json: 'JSON',
            cancel: 'إلغاء',
            export: 'تصدير',
            error: {
                title: 'خطأ في تصدير الرسم',
                description: 'حدث خطأ ما. تحتاج مساعدة؟ support@chartdb.io',
            },
        },

        import_diagram_dialog: {
            title: 'استيراد رسم',
            description: 'استيراد رسم من ملف JSON.',
            cancel: 'إلغاء',
            import: 'استيراد',
            error: {
                title: 'خطأ في استيراد الرسم',
                description: 'ملف JSON للرسم غير صالح. يرجى التحقق من JSON والمحاولة مرة أخرى. تحتاج مساعدة؟ support@chartdb.io',
            },
        },

        import_dbml_dialog: {
            example_title: 'استيراد مثال DBML',
            title: 'استيراد DBML',
            description: 'استيراد مخطط قاعدة بيانات بتنسيق DBML.',
            import: 'استيراد',
            cancel: 'إلغاء',
            skip_and_empty: 'تخطي وبدء فارغ',
            show_example: 'عرض مثال',
            error: {
                title: 'خطأ في استيراد DBML',
                description: 'فشل في تحليل DBML. يرجى التحقق من الصيغة.',
            },
        },
        relationship_type: {
            one_to_one: 'واحد لواحد',
            one_to_many: 'واحد لكثير',
            many_to_one: 'كثير لواحد',
            many_to_many: 'كثير لكثير',
        },

        canvas_context_menu: {
            new_table: 'جدول جديد',
            new_relationship: 'علاقة جديدة',
            new_area: 'منطقة جديدة',
        },

        table_node_context_menu: {
            edit_table: 'تعديل الجدول',
            duplicate_table: 'تكرار الجدول',
            delete_table: 'حذف الجدول',
            add_relationship: 'إضافة علاقة',
        },

        snap_to_grid_tooltip: 'محاذاة إلى الشبكة (اضغط {{key}})',

        tool_tips: {
            double_click_to_edit: 'انقر نقرًا مزدوجًا للتعديل',
        },

        language_select: {
            change_language: 'اللغة',
        },
    },
};

export const arMetadata: LanguageMetadata = {
    name: 'Arabic',
    nativeName: 'العربية',
    code: 'ar',
};
