import React, { memo } from 'react';

interface MessagesPageProps {
  className?: string;
}

const NotFoundPage = memo(({ className }: MessagesPageProps) => (
  <main>NotFoundPage</main>
));

export default NotFoundPage;
