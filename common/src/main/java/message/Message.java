package message;

/**
 * @author Nandem on 2017-05-09.
 */
public class Message
{
    private int messageCode;
    private String messageContent;

    public Message(MessageEnum messageEnum)
    {
        this.messageCode = messageEnum.getCode();
        this.messageContent = messageEnum.getContent();
    }

    public Message(String messageContent)
    {
        this.messageContent = messageContent;
    }

    public Message(int messageCode)
    {
        this.messageCode = messageCode;
    }

    public Message(int messageCode, String messageContent)
    {
        this.messageCode = messageCode;
        this.messageContent = messageContent;
    }

    public int getMessageCode()
    {
        return messageCode;
    }

    public void setMessageCode(int messageCode)
    {
        this.messageCode = messageCode;
    }

    public String getMessageContent()
    {
        return messageContent;
    }

    public void setMessageContent(String messageContent)
    {
        this.messageContent = messageContent;
    }
}
