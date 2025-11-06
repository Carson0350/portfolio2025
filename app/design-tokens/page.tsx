import { designTokens } from '@/lib/design-tokens';

export default function DesignTokensPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-primary-800 text-white py-8">
        <div className="max-w-container mx-auto px-container-padding-mobile md:px-container-padding">
          <h1 className="text-h1-mobile md:text-h1 mb-2">
            Design System Tokens
          </h1>
          <p className="text-body-large text-primary-100">
            Visual demonstration of all design tokens and theme configuration
          </p>
        </div>
      </header>

      <main className="max-w-container mx-auto px-container-padding-mobile md:px-container-padding py-section-mobile md:py-section">
        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Color Palette
          </h2>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-h3-mobile md:text-h3 text-primary-700 mb-4">
              Primary (Slate)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Object.entries(designTokens.colors.primary).map(
                ([shade, color]) =>
                  shade !== 'DEFAULT' && (
                    <div key={shade} className="space-y-2">
                      <div
                        className="h-20 rounded-lg shadow-card"
                        style={{ backgroundColor: color }}
                      />
                      <div className="text-small">
                        <div className="font-semibold">{shade}</div>
                        <div className="text-neutral-600 font-mono text-tiny">
                          {color}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-12">
            <h3 className="text-h3-mobile md:text-h3 text-primary-700 mb-4">
              Accent (Cyan)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Object.entries(designTokens.colors.accent).map(
                ([shade, color]) =>
                  shade !== 'DEFAULT' && (
                    <div key={shade} className="space-y-2">
                      <div
                        className="h-20 rounded-lg shadow-card"
                        style={{ backgroundColor: color }}
                      />
                      <div className="text-small">
                        <div className="font-semibold">{shade}</div>
                        <div className="text-neutral-600 font-mono text-tiny">
                          {color}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-12">
            <h3 className="text-h3-mobile md:text-h3 text-primary-700 mb-4">
              Semantic Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Success */}
              <div>
                <h4 className="text-h5 text-primary-700 mb-3">Success</h4>
                <div className="space-y-2">
                  {[100, 500, 800].map((shade) => (
                    <div key={shade} className="flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-lg shadow-sm"
                        style={{
                          backgroundColor:
                            designTokens.colors.success[
                              shade as keyof typeof designTokens.colors.success
                            ],
                        }}
                      />
                      <div className="text-small">
                        <div className="font-semibold">{shade}</div>
                        <div className="text-neutral-600 font-mono text-tiny">
                          {
                            designTokens.colors.success[
                              shade as keyof typeof designTokens.colors.success
                            ]
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning */}
              <div>
                <h4 className="text-h5 text-primary-700 mb-3">Warning</h4>
                <div className="space-y-2">
                  {[100, 500, 800].map((shade) => (
                    <div key={shade} className="flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-lg shadow-sm"
                        style={{
                          backgroundColor:
                            designTokens.colors.warning[
                              shade as keyof typeof designTokens.colors.warning
                            ],
                        }}
                      />
                      <div className="text-small">
                        <div className="font-semibold">{shade}</div>
                        <div className="text-neutral-600 font-mono text-tiny">
                          {
                            designTokens.colors.warning[
                              shade as keyof typeof designTokens.colors.warning
                            ]
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error */}
              <div>
                <h4 className="text-h5 text-primary-700 mb-3">Error</h4>
                <div className="space-y-2">
                  {[100, 500, 800].map((shade) => (
                    <div key={shade} className="flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-lg shadow-sm"
                        style={{
                          backgroundColor:
                            designTokens.colors.error[
                              shade as keyof typeof designTokens.colors.error
                            ],
                        }}
                      />
                      <div className="text-small">
                        <div className="font-semibold">{shade}</div>
                        <div className="text-neutral-600 font-mono text-tiny">
                          {
                            designTokens.colors.error[
                              shade as keyof typeof designTokens.colors.error
                            ]
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div>
                <h4 className="text-h5 text-primary-700 mb-3">Info</h4>
                <div className="space-y-2">
                  {[100, 500, 800].map((shade) => (
                    <div key={shade} className="flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-lg shadow-sm"
                        style={{
                          backgroundColor:
                            designTokens.colors.info[
                              shade as keyof typeof designTokens.colors.info
                            ],
                        }}
                      />
                      <div className="text-small">
                        <div className="font-semibold">{shade}</div>
                        <div className="text-neutral-600 font-mono text-tiny">
                          {
                            designTokens.colors.info[
                              shade as keyof typeof designTokens.colors.info
                            ]
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Typography
          </h2>

          {/* Headings */}
          <div className="mb-12 bg-white p-card-padding rounded-lg shadow-card">
            <h3 className="text-h3-mobile md:text-h3 text-primary-700 mb-6">
              Headings
            </h3>
            <div className="space-y-4">
              <div>
                <h1 className="text-h1-mobile md:text-h1 text-primary-800">
                  Heading 1 (48px / 32px mobile)
                </h1>
                <p className="text-small text-neutral-600 font-mono">
                  text-h1 / text-h1-mobile
                </p>
              </div>
              <div>
                <h2 className="text-h2-mobile md:text-h2 text-primary-800">
                  Heading 2 (36px / 28px mobile)
                </h2>
                <p className="text-small text-neutral-600 font-mono">
                  text-h2 / text-h2-mobile
                </p>
              </div>
              <div>
                <h3 className="text-h3-mobile md:text-h3 text-primary-800">
                  Heading 3 (30px / 24px mobile)
                </h3>
                <p className="text-small text-neutral-600 font-mono">
                  text-h3 / text-h3-mobile
                </p>
              </div>
              <div>
                <h4 className="text-h4-mobile md:text-h4 text-primary-800">
                  Heading 4 (24px / 20px mobile)
                </h4>
                <p className="text-small text-neutral-600 font-mono">
                  text-h4 / text-h4-mobile
                </p>
              </div>
              <div>
                <h5 className="text-h5 text-primary-800">Heading 5 (20px)</h5>
                <p className="text-small text-neutral-600 font-mono">text-h5</p>
              </div>
              <div>
                <h6 className="text-h6 text-primary-800">Heading 6 (18px)</h6>
                <p className="text-small text-neutral-600 font-mono">text-h6</p>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="mb-12 bg-white p-card-padding rounded-lg shadow-card">
            <h3 className="text-h3-mobile md:text-h3 text-primary-700 mb-6">
              Body Text
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-body-xl text-neutral-700">
                  Extra large body text (20px) - text-body-xl
                </p>
              </div>
              <div>
                <p className="text-body-large text-neutral-700">
                  Large body text (18px) - text-body-large
                </p>
              </div>
              <div>
                <p className="text-body text-neutral-700">
                  Default body text (16px) - text-body
                </p>
              </div>
              <div>
                <p className="text-body-sm text-neutral-700">
                  Small body text (15px) - text-body-sm
                </p>
              </div>
              <div>
                <p className="text-small text-neutral-700">
                  Small text (14px) - text-small
                </p>
              </div>
              <div>
                <p className="text-tiny text-neutral-700">
                  Tiny text (12px) - text-tiny
                </p>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div className="mb-12 bg-white p-card-padding rounded-lg shadow-card">
            <h3 className="text-h3-mobile md:text-h3 text-primary-700 mb-6">
              Font Weights
            </h3>
            <div className="space-y-2">
              <p className="text-body font-light text-neutral-700">
                Light (300) - font-light
              </p>
              <p className="text-body font-normal text-neutral-700">
                Normal (400) - font-normal
              </p>
              <p className="text-body font-medium text-neutral-700">
                Medium (500) - font-medium
              </p>
              <p className="text-body font-semibold text-neutral-700">
                Semibold (600) - font-semibold
              </p>
              <p className="text-body font-bold text-neutral-700">
                Bold (700) - font-bold
              </p>
              <p className="text-body font-extrabold text-neutral-700">
                Extrabold (800) - font-extrabold
              </p>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Spacing
          </h2>

          <div className="bg-white p-card-padding rounded-lg shadow-card space-y-8">
            <div>
              <h3 className="text-h4 text-primary-700 mb-4">Section Spacing</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-small font-mono text-neutral-600">
                    section
                  </div>
                  <div className="flex-1 bg-accent-100 h-12 rounded flex items-center justify-center text-small">
                    96px (6rem)
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-small font-mono text-neutral-600">
                    section-tablet
                  </div>
                  <div className="flex-1 bg-accent-100 h-12 rounded flex items-center justify-center text-small">
                    64px (4rem)
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-small font-mono text-neutral-600">
                    section-mobile
                  </div>
                  <div className="flex-1 bg-accent-100 h-12 rounded flex items-center justify-center text-small">
                    48px (3rem)
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-h4 text-primary-700 mb-4">
                Container Padding
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-small font-mono text-neutral-600">
                    container-padding
                  </div>
                  <div className="flex-1 bg-primary-100 h-12 rounded flex items-center justify-center text-small">
                    32px (2rem)
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-small font-mono text-neutral-600">
                    container-padding-tablet
                  </div>
                  <div className="flex-1 bg-primary-100 h-12 rounded flex items-center justify-center text-small">
                    24px (1.5rem)
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-small font-mono text-neutral-600">
                    container-padding-mobile
                  </div>
                  <div className="flex-1 bg-primary-100 h-12 rounded flex items-center justify-center text-small">
                    16px (1rem)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shadows Section */}
        <section className="mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Shadows
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'sm',
              'DEFAULT',
              'md',
              'lg',
              'xl',
              '2xl',
              'card',
              'card-hover',
            ].map((shadow) => (
              <div
                key={shadow}
                className="bg-white p-8 rounded-lg"
                style={{
                  boxShadow:
                    designTokens.boxShadow[
                      shadow as keyof typeof designTokens.boxShadow
                    ],
                }}
              >
                <p className="text-body font-semibold text-primary-800">
                  shadow-{shadow === 'DEFAULT' ? 'default' : shadow}
                </p>
                <p className="text-small text-neutral-600 mt-2 font-mono break-all">
                  {
                    designTokens.boxShadow[
                      shadow as keyof typeof designTokens.boxShadow
                    ]
                  }
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Border Radius
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['sm', 'DEFAULT', 'lg', 'xl', '2xl', '3xl'].map((radius) => (
              <div key={radius} className="text-center">
                <div
                  className="bg-accent-500 h-24 mb-3 mx-auto"
                  style={{
                    borderRadius:
                      designTokens.borderRadius[
                        radius as keyof typeof designTokens.borderRadius
                      ],
                  }}
                />
                <p className="text-small font-semibold text-primary-800">
                  rounded-{radius === 'DEFAULT' ? 'default' : radius}
                </p>
                <p className="text-tiny text-neutral-600 font-mono">
                  {
                    designTokens.borderRadius[
                      radius as keyof typeof designTokens.borderRadius
                    ]
                  }
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Animations Section */}
        <section className="mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Animations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-card-padding rounded-lg shadow-card">
              <div className="bg-accent-500 text-white p-6 rounded-lg animate-fade-in text-center">
                <p className="font-semibold">Fade In</p>
                <p className="text-small mt-2">animate-fade-in</p>
              </div>
            </div>
            <div className="bg-white p-card-padding rounded-lg shadow-card">
              <div className="bg-primary-800 text-white p-6 rounded-lg animate-slide-up text-center">
                <p className="font-semibold">Slide Up</p>
                <p className="text-small mt-2">animate-slide-up</p>
              </div>
            </div>
            <div className="bg-white p-card-padding rounded-lg shadow-card">
              <div className="bg-success-500 text-white p-6 rounded-lg animate-slide-down text-center">
                <p className="font-semibold">Slide Down</p>
                <p className="text-small mt-2">animate-slide-down</p>
              </div>
            </div>
            <div className="bg-white p-card-padding rounded-lg shadow-card">
              <div className="bg-warning-500 text-white p-6 rounded-lg animate-scale-in text-center">
                <p className="font-semibold">Scale In</p>
                <p className="text-small mt-2">animate-scale-in</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breakpoints Section */}
        <section className="mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Breakpoints
          </h2>

          <div className="bg-white p-card-padding rounded-lg shadow-card">
            <div className="space-y-4">
              {Object.entries(designTokens.breakpoints).map(([name, value]) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-primary-800">{name}</p>
                    <p className="text-small text-neutral-600">
                      Breakpoint for{' '}
                      {name === 'xs'
                        ? 'extra small'
                        : name === 'sm'
                          ? 'small'
                          : name === 'md'
                            ? 'medium'
                            : name === 'lg'
                              ? 'large'
                              : name === 'xl'
                                ? 'extra large'
                                : '2x large'}{' '}
                      screens
                    </p>
                  </div>
                  <p className="text-body font-mono text-accent-600">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-100 py-8 mt-16">
        <div className="max-w-container mx-auto px-container-padding-mobile md:px-container-padding text-center">
          <p className="text-body">Design System Tokens - Portfolio Project</p>
          <p className="text-small text-primary-300 mt-2">
            See{' '}
            <code className="bg-primary-800 px-2 py-1 rounded text-accent-300">
              /docs/design-system.md
            </code>{' '}
            for full documentation
          </p>
        </div>
      </footer>
    </div>
  );
}
