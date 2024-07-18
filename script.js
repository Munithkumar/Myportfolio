 <style>
        /* Additional CSS for Hamburger Menu */
        .menu {
            display: none;
        }
        .menu-btn {
            display: none;
            font-size: 24px;
            cursor: pointer;
            background: none;
            border: none;
        }
        .menu-btn:focus {
            outline: none;
        }
        .menu-items {
            display: flex;
            list-style-type: none;
        }
        .menu-items li {
            margin-right: 20px;
        }
        .menu-items a {
            text-decoration: none;
            color: #000;
        }
        @media (max-width: 768px) {
            .menu {
                display: block;
            }
            .menu-btn {
                display: block;
            }
            .menu-items {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 60px;
                right: 0;
                background: #fff;
                border: 1px solid #ddd;
                padding: 10px;
            }
            .menu-items.active {
                display: flex;
            }
            .menu-items li {
                margin: 10px 0;
            }
        }
    </style>
</head>
