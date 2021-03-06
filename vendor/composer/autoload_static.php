<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd4c50023d18116673bb54a16bbf69289
{
    public static $files = array (
        '975435ac0ad0ca10ded875d3eb7d5bd6' => __DIR__ . '/..' . '/oboyda/wp-seed/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPSEED\\' => 7,
        ),
        'T' => 
        array (
            'WPBOOT\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPSEED\\' => 
        array (
            0 => __DIR__ . '/..' . '/oboyda/wp-seed/src/classes',
        ),
        'WPBOOT\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/php/classes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd4c50023d18116673bb54a16bbf69289::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd4c50023d18116673bb54a16bbf69289::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd4c50023d18116673bb54a16bbf69289::$classMap;

        }, null, ClassLoader::class);
    }
}
