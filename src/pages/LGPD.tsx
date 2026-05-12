import LegalPage from "@/components/LegalPage";

const LGPD = () => {
  return (
    <LegalPage title="Compromisso com a Privacidade e Proteção de Dados (LGPD)">
      <p>
        Na <strong>PontuaAI</strong>, levamos a sério a segurança das suas informações.
        Estamos em total conformidade com a <strong>Lei Geral de Proteção de Dados
        (Lei nº 13.709/2018)</strong>, garantindo uma operação ética e transparente.
      </p>

      <h2>1. Gestão de Dados e Contato (DPO)</h2>
      <p>
        Designamos uma Encarregada de Proteção de Dados (Data Protection Officer - DPO)
        para supervisionar todas as nossas práticas de privacidade. Para dúvidas,
        solicitações ou incidentes, entre em contato diretamente com nossa equipe de
        governança:
      </p>
      <ul>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:atendimento@pontuaai.com">atendimento@pontuaai.com</a>
        </li>
        <li>
          <strong>Encarregada atual:</strong> Priscilla Santos Faria
        </li>
      </ul>

      <h2>2. Nossa Transparência</h2>
      <ul>
        <li>
          <strong>Política de Privacidade:</strong> Mantemos diretrizes públicas e
          atualizadas que podem ser consultadas a qualquer momento em nosso site{" "}
          www.pontuaai.com.
        </li>
        <li>
          <strong>Melhoria Contínua:</strong> Operamos sob um plano de adequação
          permanente. Isso significa que nossos sistemas passam por auditorias e
          evoluções constantes para elevar o nível de proteção dos seus dados.
        </li>
        <li>
          Se você perceber alguma inadequação, for vítima de algum incidente de
          vazamento envolvendo nossos serviços ou der causa à incidente de vazamento,
          comunique imediatamente a Encarregada de Dados pelo e-mail{" "}
          <a href="mailto:atendimento@pontuaai.com">atendimento@pontuaai.com</a>.
        </li>
      </ul>

      <h2>3. Coleta Mínima e Finalidade</h2>
      <p>
        Coletamos estritamente os dados necessários para a entrega de excelência de
        nossos serviços de inteligência e educação.
      </p>
      <ul>
        <li>
          <strong>Direito de Revogação:</strong> Você pode retirar seu consentimento a
          qualquer momento via e-mail. Ressaltamos que a exclusão de dados essenciais
          impossibilita a continuidade da prestação de serviços na plataforma.
        </li>
        <li>
          <strong>Retenção e Descarte:</strong> Mantemos dados de contato para nossa
          política de comunicação ativa. Informações excedentes são eliminadas
          anualmente, e contas sem atividade por mais de 6 meses são automaticamente
          inativadas.
        </li>
      </ul>

      <h2>4. Armazenamento e Compartilhamento Seguro</h2>
      <p>
        Os dados da <strong>PontuaAI</strong> são processados em infraestrutura de
        nuvem de alta performance (Amazon AWS), com servidores localizados no Brasil e
        redundância (espelhamento) global.
      </p>
      <p>
        Para otimizar nossa operação, utilizamos ferramentas auxiliares de parceiros
        confiáveis (como Google Workspace, infraestruturas de CRM, DropBox, Zendesk,
        Vindi e Trello, RDstation e suporte técnico). No caso de correções pedagógicas,
        os textos podem ser compartilhados com nossa rede de professores especialistas,
        sempre sob rígidos termos de confidencialidade.
      </p>

      <h2>5. Seus Direitos como Titular</h2>
      <p>
        De acordo com os <strong>Artigos 9º e 18 da LGPD</strong>, a PontuaAI assegura
        a você o acesso facilitado e gratuito para:
      </p>
      <ul>
        <li><strong>Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los.</li>
        <li><strong>Correção:</strong> Atualizar informações imprecisas ou incompletas.</li>
        <li><strong>Anonimização ou Exclusão:</strong> Solicitar a eliminação de dados desnecessários ou tratados em desconformidade.</li>
        <li><strong>Portabilidade:</strong> Transferir seus dados para outro fornecedor, conforme regulamentação nacional.</li>
        <li><strong>Informação sobre Compartilhamento:</strong> Saber com quais entidades públicas ou privadas compartilhamos dados.</li>
        <li><strong>Revogação de Consentimento:</strong> Ser informado sobre as consequências de não autorizar o tratamento e poder voltar atrás na decisão.</li>
      </ul>
    </LegalPage>
  );
};

export default LGPD;
