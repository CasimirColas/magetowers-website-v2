async function getStaticPropsI18n(namespace: string[], locale?: string) {
  const messages: any = {};

  for await (const ns of namespace) {
    messages[ns] = (
      await import(`@/locales/${locale ?? "en"}/${ns}.json`)
    ).default;
  }

  return {
    props: {
      messages: messages,
    },
  };
}

export default getStaticPropsI18n;
